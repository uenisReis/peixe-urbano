import { Carrinho } from "./shared/carrinho.model";
import { Oferta } from "./shared/oferta.model";

export class CarrinhoService{

public iten:Carrinho []=[]

    public url!: string;






    public exibirItens(): Carrinho[] {
        return this.iten
    }









// atribuindo o valor que é do tipo oferta ao tipo carrinho
public inserirIten(oferta:Oferta):void{

    let carrinho:Carrinho= new Carrinho(
        oferta.id,
        oferta.titulo,
        oferta.imagens[0],
        oferta.descricao_oferta,
        oferta.valor,
        1,
        
        )

// verificando caso tenha um objeto da mesma instancia ? atualiza quantidade: criar outro objeto
let verificarIem=this.iten.find((item:Carrinho)=>item.id===carrinho.id)


if(verificarIem){

verificarIem.quantidade+=1

}else{

this.iten.push(carrinho)}}








// atualizando a soma de todos os produtos adicionado no carrinho
public atualizarValorTotal():number{
    let valoTotal:number=0

this.iten.map((iten:Carrinho)=>{

valoTotal=valoTotal+(iten.valor *iten.quantidade)} )

return valoTotal}






public incrementValor(iten:any){

let valorContido=this.iten.find((valor:Carrinho)=> valor.id===iten.id)

if (valorContido ){

valorContido.quantidade +=1}}




public decrementValor(iten:Carrinho){
let valorContido=this.iten.find((valor:Carrinho)=>valor.id=== iten.id )

if(valorContido){
valorContido.quantidade -=1

if(valorContido.quantidade===0){

   this.iten.splice(this.iten.indexOf(valorContido,1))
}}}

 public zerarCarrinho ():void{
this.iten=[]

 }

}
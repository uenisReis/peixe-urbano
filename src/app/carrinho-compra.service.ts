import { Carrinho } from "./shared/carrinho.model";
import { Oferta } from "./shared/oferta.model";

export class CarrinhoService{

public iten:Carrinho []=[]
    public url!: string;


public inserirIten(oferta:Oferta):void{

    let carrinho:Carrinho= new Carrinho(
        oferta.id,
        oferta.titulo,
        oferta.imagens[0],
        oferta.descricao_oferta,
        oferta.valor,
        1
        
        )
console.log("carrinhoService :",this.iten)
this.iten.push(carrinho)
}
public popularCarrinho():any{

//console.log('consoloe de iten',this.iten)

    return this.iten
}






}
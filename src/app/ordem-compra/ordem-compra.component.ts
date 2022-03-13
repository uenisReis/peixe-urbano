import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho-compra.service';
import { Carrinho } from '../shared/carrinho.model';
import { Oferta } from '../shared/oferta.model';
import { Pedido } from '../shared/pedido.model';
import { OrdemCompraService } from './onden-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService, ]
})



export class OrdemCompraComponent implements OnInit {

public formulario:FormGroup=new FormGroup({

'endereco': new FormControl(null ,[Validators.required,Validators.minLength(3)]),
'numero': new FormControl(null,[Validators.required,Validators.minLength(1)]),
'complemento': new FormControl(null),

'formaPagamento':  new FormControl(null,[Validators.required,]),


})
  constructor( private compraService:OrdemCompraService , private carrinhoService:CarrinhoService) { }

public itenCarrinho:Carrinho[]=[];
  

  ngOnInit(): void {
this.itenCarrinho =this.carrinhoService.exibirItens()


  }

@ Input() public idPedidorespots!:number

   
public enviarFormulario():any{

if(this.itenCarrinho.length===0){
alert('voçênao tem nada selecionado')

}else{





 let newFormulario= this.formulario.value

let pedido:Pedido=new Pedido(
newFormulario.endereco,
newFormulario.numero,
newFormulario.complemento,
newFormulario.formaPagamento,
 this.itenCarrinho
)
this.compraService.efetivarCompra(pedido)
.subscribe((idPedido:any)=> { this.idPedidorespots=idPedido

  this.carrinhoService.zerarCarrinho()

})}}

public atualizarValorTotal():number{

 let valor= this.carrinhoService.atualizarValorTotal()
 return valor
}

public reduzirQuantidade(item:Carrinho){
this.carrinhoService.decrementValor(item)
}



    public adicionarQuantidade (item:Carrinho){

this.carrinhoService.incrementValor(item)
    }

}



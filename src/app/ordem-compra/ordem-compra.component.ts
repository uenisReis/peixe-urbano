import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho-compra.service';
import { Carrinho } from '../shared/carrinho.model';
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
this.itenCarrinho =this.carrinhoService.iten

console.log("isso se trata do iten carrinho",this.itenCarrinho)

  }

@ Input() public idPedidorespots!:number

   
public enviarFormulario():any{
 let newFormulario= this.formulario.value

let pedido:Pedido=new Pedido(
newFormulario.endereco,
newFormulario.numero,
newFormulario.complemento,
newFormulario.formaPagamento,

 

)


this.compraService.efetivarCompra(pedido)
.subscribe((idPedido:any)=> { this.idPedidorespots=idPedido

console.log(" esse console é da classe ordemCompra",this.idPedidorespots)
})
  

}



    

}



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  CarrinhoService } from '../carrinho-compra.service';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
providers:[OfertasService,]

})
export class OfertaComponent implements OnInit {

  constructor( private route:ActivatedRoute, private ofertaservice:OfertasService,private  carrinhoService:CarrinhoService) { }
 public oferta !:Oferta
  
  ngOnInit(): void {

    
this.route.params.subscribe(
(contexto:any)=>
this.ofertaservice.getOfertasPorId(this.route.snapshot.params['id']).then((oferta:any)=> {this.oferta=oferta})

)


 }

 public gerarTampleteOferta(oferta:Oferta):void{

  this.carrinhoService.inserirIten(this.oferta)
console.log("oferta ",this.oferta)


}



}

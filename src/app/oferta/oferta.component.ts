import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
providers:[OfertasService]

})
export class OfertaComponent implements OnInit {

  constructor( private route:ActivatedRoute, private ofertaservice:OfertasService) { }
  public ofertaId:any
 public ofertas !:Oferta
  
  ngOnInit(): void {

    
    this.ofertaId= this.route.snapshot.params['id']


    console.log(` o oferta co o id${this.ofertaId}`)

this.ofertaservice.getOfertasPorId(2).then((oferta:any)=> {this.ofertas=oferta})



console.log(` o oferta passou aqui${this.ofertas}`)



 }





}

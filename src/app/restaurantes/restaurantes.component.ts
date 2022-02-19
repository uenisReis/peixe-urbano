import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers :[OfertasService],
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertsService:OfertasService) { }


public ofertas:Array<Oferta>=[]

  ngOnInit(): void {


this.ofertsService.getCategoria("restaurante").then(

(ofertas:Array<Oferta>)=>{this.ofertas=ofertas}

)

  }

}

import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers:[OfertasService]

})
export class DiversaoComponent implements OnInit {

  constructor(private ofertaservice:OfertasService) { }


  public ofertas:Array<Oferta>=[]

  ngOnInit(): void {


    this.ofertaservice.getCategoria("diversao").then(
    
      (ofertas:Array<Oferta>)=>{ this.ofertas= ofertas}
    )

  }

}

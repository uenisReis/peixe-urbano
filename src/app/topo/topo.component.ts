import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
public homer:any= HomeComponent


  constructor() { }

  ngOnInit() {


    this.homer.getOfertas("diversao")
  }

}

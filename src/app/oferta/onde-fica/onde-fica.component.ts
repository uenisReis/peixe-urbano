import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.services';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers:[OfertasService]
})
export class OndeFicaComponent implements OnInit {

  constructor(private router:ActivatedRoute, private ofertaservice:OfertasService) { }
public ondeFica!:String;
  ngOnInit(): void {


 this.router.parent?.params.subscribe((context:any)=>{

  this.ofertaservice.getOndeFicaPorId(context.id).then((resposta:String)=>this.ondeFica=resposta)

 })


  }

}

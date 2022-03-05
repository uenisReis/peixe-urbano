import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.services';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers:[
    OfertasService
  ]
})
export class ComoUsarComponent implements OnInit {

  constructor(private router:ActivatedRoute ,private ofertaserice:OfertasService) { }


 public comousar!:String ;

  ngOnInit(): void {



  this.router.parent?.params.subscribe(

(context:any)=>this.ofertaserice.getComoUsarPorId(context.id).then(
  (resposta:String)=>{
  
    this.comousar=resposta

  
  }
  
)


  )





  }

}

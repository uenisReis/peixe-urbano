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



  let id:number= this.router.parent?.snapshot.params['id']

this.ofertaserice.getComoUsarPorId(id).then(
  (resposta:String)=>{
    
    console.log(resposta)
    this.comousar=resposta

  
  }
  
)




  }

}

import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, observable, Observable, of, Subject, switchMap } from 'rxjs';
import { OfertasService } from '../ofertas.services';
import { Carrinho } from '../shared/carrinho.model';
import { Oferta } from '../shared/oferta.model';
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[OfertasService]
})
export class TopoComponent implements OnInit {

public oferta!:Observable<Oferta[]>;

public pesquisaoferta:Subject<String>= new Subject<String>()
  constructor(private ofertaservice:OfertasService  ) { }





  pesquisa(dados:String):void{

this.pesquisaoferta.next(dados)


  }


  ngOnInit() {
this.oferta=this.pesquisaoferta.pipe(
  debounceTime(1000),//aguarda 1 segundo para fazer a pesquisa
  distinctUntilChanged(),
  switchMap((termo:String)=>{

    if(termo.trim() ===""){

      return of<Array<Oferta>>([])
    }

return this.ofertaservice.pesquisarOferta(termo)
}),catchError ((erro) => {
  console.log(erro)
  return of<Oferta[]>([])
 })

)


  }
  zerarPesquisa():void{

    this.pesquisaoferta.next('')
  }






}



import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";

import { URL_API_PEDIDOS } from "../app.api";
@Injectable()
 export class OrdemCompraService{

constructor(private http:HttpClient){}

public efetivarCompra(pedido: any): Observable<number> {
    let headers = new HttpHeaders({'Content-type':'application/json'})  
        let idPedido:number

    
    return this.http.post
    (`${URL_API_PEDIDOS}/pedidos`,
    JSON.stringify(pedido), 
    ({headers: headers})

    ).pipe(map((idPedidos: any) => idPedido= idPedidos.id,
    
    
    ))
}
    
 }
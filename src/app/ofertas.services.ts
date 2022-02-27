import { HttpClient } from '@angular/common/http'
import { identifierName } from '@angular/compiler'
import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs/internal/firstValueFrom'
import { URL_API, URL_API_COMO_USAR, URL_API_ONDE_FICA } from './app.api'
import { Oferta } from './shared/oferta.model'




@Injectable()
export class OfertasService {
 private url:String=URL_API
private urlComoUsar:String=URL_API_COMO_USAR
private urlOndeFica=URL_API_ONDE_FICA; 
constructor(private http:HttpClient){}

    public getOfertas(): Promise<Array<Oferta>> {

return firstValueFrom(this.http.get(`${this.url}destaque=true`)).then((resposta:any) =>resposta)

     
    
 }

     public getCategoria(categoria:String):Promise<Array<Oferta>> {
         return firstValueFrom( this.http.get(`${this.url}categoria=${categoria}`)).then((resposta:any)=> resposta)
         

}


public getOfertasPorId(id:number):Promise<Oferta>{
return firstValueFrom( this.http.get(`${this.url}id=${id}`)).then((resposta:any)=> resposta[0]);

}

public getComoUsarPorId(id:number):Promise<String>{

    return firstValueFrom(this.http.get(`${this.urlComoUsar}id=${id}`)).then((resposta:any)=>resposta[0].descricao);
    
    


}public getOndeFicaPorId(id:number):Promise<String>{

    return firstValueFrom(this.http.get(`${this.urlOndeFica}id=${id}`))
    .then((resposta:any)=>resposta[0].descricao)
}


     }
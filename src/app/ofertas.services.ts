import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs/internal/firstValueFrom'
import { Oferta } from './shared/oferta.model'




@Injectable()
export class OfertasService {
 public url:String="http://localhost:3000/ofertas?"

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




     }
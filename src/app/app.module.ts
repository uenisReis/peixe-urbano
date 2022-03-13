import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompraSucessoComponent } from './ordem-compra/compra-sucesso/compra-sucesso.component';
import { CarrinhoService } from './carrinho-compra.service';
@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    DiversaoComponent,
    RestaurantesComponent,
    OfertaComponent,
    OndeFicaComponent,
    ComoUsarComponent,
    OrdemCompraComponent,
    CompraSucessoComponent,


  ],


  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule ,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [CarrinhoService],
  bootstrap: [AppComponent]
})
export   class AppModule { }

import { LOCALE_ID, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { ContentComponent } from './shared/components/content/content.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CarroselPromoComponent } from './shared/components/carrosel-promo/carrosel-promo.component';
import { CardEstabelecimentoComponent } from './shared/components/card-estabelecimento/card-estabelecimento.component';
import { FormLoginComponent } from './shared/components/form-login/form-login.component';
import { CarroselProdutosComponent } from './shared/components/carrosel-produtos/carrosel-produtos.component';
import { CardProdutoComponent } from './shared/components/card-produto/card-produto.component';

import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { DetalheProdutoComponent } from './view/detalhe-produto/detalhe-produto.component';
import { MenuDetalheProdutoComponent } from './shared/components/menu-detalhe-produto/menu-detalhe-produto.component';
import { CardProdutoDetalheProdutoComponent } from './shared/components/card-produto-detalhe-produto/card-produto-detalhe-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './view/car/car.component';
import { CarouselItemComponent } from './shared/components/carousel-item/carousel-item.component';
import { CarouselIndicatorsComponent } from './shared/components/carousel-indicators/carousel-indicators.component';

// **************************************************
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);
// **************************************************

const appRoutes: Routes = [
  {
    path: ''
    , component: AppComponent /* inclue navbar e footer*/
    , children: [
          { path: 'login', component: LoginComponent }
        , { path: 'home', component: HomeComponent }
        , { path: 'detalhe-produto/:product_id/:store_id', component: DetalheProdutoComponent }
        , { path: 'carros', component: CarComponent }
        , { path: '', component: HomeComponent }
        // , {path: '**', component: HomeComponent }
      ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent,
    FooterComponent,
    CarroselPromoComponent,
    CardEstabelecimentoComponent,
    FormLoginComponent,
    CarroselProdutosComponent,
    CardProdutoComponent,
    HomeComponent,
    LoginComponent,
    DetalheProdutoComponent,
    MenuDetalheProdutoComponent,
    CardProdutoDetalheProdutoComponent,
    CarComponent,
    CarouselItemComponent,
    CarouselIndicatorsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
    , HttpClientModule
    , BrowserModule
    , AppRoutingModule
  ],
  providers: [
     // ************************************
     { provide: LOCALE_ID, useValue: 'pt' },
     // ************************************
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

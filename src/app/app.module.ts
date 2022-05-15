import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EdebTarihComponent } from './components/edeb-tarih/edeb-tarih.component';
import { YazarlarComponent } from './components/yazarlar/yazarlar.component';
import { MehmetAkifComponent } from './components/yazarlar/mehmet-akif/mehmet-akif.component';
import { HalideEdibComponent } from './components/yazarlar/halide-edib/halide-edib.component';
import { ResatNuriComponent } from './components/yazarlar/resat-nuri/resat-nuri.component';
import { OmerSeyfettinComponent } from './components/yazarlar/omer-seyfettin/omer-seyfettin.component';
import { FooterComponent } from './components/footer/footer.component';
import { SiirComponent } from './components/siir/siir.component';
import { DidaktikSiirComponent } from './components/siir/didaktik-siir/didaktik-siir.component';
import { EpikSiirComponent } from './components/siir/epik-siir/epik-siir.component';
import { LirikSiirComponent } from './components/siir/lirik-siir/lirik-siir.component';
import { ModernSiirComponent } from './components/siir/modern-siir/modern-siir.component';
import { CopyRightComponent } from './components/footer/copy-right/copy-right.component';
import { AboutComponent } from './components/about/about.component';
import { EdebToplumComponent } from './components/edeb-toplum/edeb-toplum.component';
import { MakaleComponent } from './components/makale/makale.component';
import { ElestiriComponent } from './components/elestiri/elestiri.component';
import { PeyamiSafaComponent } from './components/yazarlar/peyami-safa/peyami-safa.component';
import { SabahattinAliComponent } from './components/yazarlar/sabahattin-ali/sabahattin-ali.component';

const routes: Routes =[
  {path:"edebTarih",component:EdebTarihComponent},
  {path:"",component:HomeComponent},
  {path:"yazarlar", component:YazarlarComponent},
  {path:"yazarlar/mehmetAkif", component:MehmetAkifComponent},
  {path:"yazarlar/halideEdib", component:HalideEdibComponent},
  {path:"yazarlar/omerSeyfettin", component:OmerSeyfettinComponent},
  {path:"yazarlar/resatNuri", component:ResatNuriComponent},
  {path:"siir", component:SiirComponent},
  {path:"siirler/lirikSiir", component:LirikSiirComponent},
  {path:"siirler/didaktikSiir", component:DidaktikSiirComponent},
  {path:"siirler/epikSiir", component:EpikSiirComponent},
  {path:"siirler/modernSiir", component:ModernSiirComponent},
  {path:"about", component:AboutComponent},
  {path:"edebToplum", component:EdebToplumComponent},
  {path:"makale", component:MakaleComponent},
  {path:"elestiri", component:ElestiriComponent},
  {path:"peyamiSafa", component:PeyamiSafaComponent},
  {path:"sabahattin", component:SabahattinAliComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EdebTarihComponent,
    YazarlarComponent,
    MehmetAkifComponent,
    HalideEdibComponent,
    ResatNuriComponent,
    OmerSeyfettinComponent,
    FooterComponent,
    SiirComponent,
    DidaktikSiirComponent,
    EpikSiirComponent,
    LirikSiirComponent,
    ModernSiirComponent,
    CopyRightComponent,
    AboutComponent,
    EdebToplumComponent,
    MakaleComponent,
    ElestiriComponent,
    PeyamiSafaComponent,
    SabahattinAliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

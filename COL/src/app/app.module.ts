import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//index componentes
import { HeaderComponent } from './index/componentes/header/header.component';
import { BodyComponent } from './index/componentes/body/body.component';
import { FooterComponent } from './index/componentes/footer/footer.component';
import { SectionComponent } from './index/componentes/section/section.component';
import { InicioComponent } from './index/componentes/inicio/inicio.component';


//plantilla component
import { PantillaModulosComponent } from './index/modulos.plantilla/pantilla-modulos/pantilla-modulos.component';
import { MHeaderComponent } from './index/modulos.plantilla/header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    //index
    
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SectionComponent,
    InicioComponent,

    // plantilla modulos
    
       PantillaModulosComponent,
       MHeaderComponent,
      
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

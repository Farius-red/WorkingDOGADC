
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//index componentes
import { HeaderComponent } from './index/componentes/header/header.component';
import { BodyComponent } from './index/componentes/body/body.component';

import { SectionComponent } from './index/componentes/section/section.component';
import { InicioComponent } from './index/componentes/inicio/inicio.component';


//plantilla component

import { FooterWorkingDComponent } from './index/componentes/footer/footer.workingD.component';

//modulos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SharedZigmaModule } from './sharedZigmaInflables/shared-zigma.module';
import { CoreModule } from './core/modules/core.module';
import { IndexZigmaModule } from './indexZigmainflables/index-zigma.module';
import { BrowserModule } from '@angular/platform-browser';






@NgModule({
  declarations: [
    AppComponent,
    //index
    
    HeaderComponent,
    BodyComponent,
    SectionComponent,
    InicioComponent,
    FooterWorkingDComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //modulos
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    SharedZigmaModule,
   
    IndexZigmaModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

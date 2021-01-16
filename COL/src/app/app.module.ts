import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/index/header/header.component';
import { BodyComponent } from './Componentes/index/body/body.component';
import { FooterComponent } from './Componentes/index/footer/footer.component';
import { SectionComponent } from './Componentes/index/section/section.component';
import { InicioComponent } from './Componentes/index/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SectionComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

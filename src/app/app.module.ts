import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// fire base
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';


// index componentes
import { HeaderComponent } from './index/componentes/header/header.component';
import { BodyComponent } from './index/componentes/body/body.component';

import { SectionComponent } from './index/componentes/section/section.component';
import { InicioComponent } from './index/componentes/inicio/inicio.component';

// plantilla component

import { FooterWorkingDComponent } from './index/componentes/footer/footer.workingD.component';

// modulos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SharedZigmaModule } from './sharedZigmaInflables/shared-zigma.module';
import { CoreModule } from './core/modules/core.module';
import { IndexZigmaModule } from './indexZigmainflables/index-zigma.module';
import { AdminZigmaModule } from './admin-zigma/admin-zigma.module';
import { LoginModule } from './auth/login/login.module';
import { RegistroModule } from './auth/registro/registro.module';



@NgModule({
  declarations: [
    AppComponent,


    // index

    HeaderComponent,
    BodyComponent,
    SectionComponent,
    InicioComponent,
    FooterWorkingDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,



    // fire base


    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,

    CoreModule,
    SharedModule,
    SharedZigmaModule,


    // modulos Zigma
    IndexZigmaModule,
    AdminZigmaModule,
  ],
  providers: [CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

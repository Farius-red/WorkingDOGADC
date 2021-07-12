import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// fire base
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { datosfire, environment } from 'src/environments/environment';

// modulos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/modules/core.module';

// modulos zigma
import { SharedZigmaModule } from './Zigmainflables/sharedZigmaInflables/shared-zigma.module';
import { IndexZigmaModule } from './Zigmainflables/indexZigmainflables/index-zigma.module';
import { AdminZigmaModule } from './Zigmainflables/admin-zigma/admin-zigma.module';

// modulos WorkingDOGADC

import { IndexWorkingDogAdcModule } from './workingDog/index-working-dog-adc/index-working-dog-adc.module';

import { LoginModule } from './auth/login/login.module';
import { AdminWorkigModule } from './workingDog/admin-workig/admin-workig.module';
import { SharedModule } from './workingDog/shared/shared.module';
import { AdiestradorWorkingDogModule } from './workingDog/adiestrador-working-dog/adiestrador-working-dog.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // fire base

    AngularFireModule.initializeApp(environment.firebase, datosfire.firebaseWorkingDOG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,

        // modulos Working
    IndexWorkingDogAdcModule,
    AdminWorkigModule,
    // modulos Zigma
    IndexZigmaModule,
    AdminZigmaModule,
    SharedZigmaModule,
    SharedModule,
    AdiestradorWorkingDogModule,

    CoreModule,


    // login modulo
     LoginModule,
     FormsModule,
  ],

  providers: [CoreModule],
  bootstrap: [AppComponent],

})
export class AppModule {}

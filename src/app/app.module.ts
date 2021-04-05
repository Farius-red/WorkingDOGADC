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

@NgModule({
  declarations: [AppComponent],
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

    // modulos Zigma
    IndexZigmaModule,
    AdminZigmaModule,
    SharedZigmaModule,

    // modulos Working
    IndexWorkingDogAdcModule,
    AdminWorkigModule,
    SharedModule,

    CoreModule,


    // login modulo
     LoginModule
  ],

  providers: [CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

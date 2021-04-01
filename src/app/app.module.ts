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
import { SharedZigmaModule } from './sharedZigmaInflables/shared-zigma.module';
import { IndexZigmaModule } from './indexZigmainflables/index-zigma.module';
import { AdminZigmaModule } from './admin-zigma/admin-zigma.module';

// modulos WorkingDOGADC
import { SharedModule } from './shared/shared.module';
import { IndexWorkingDogAdcModule } from './index-working-dog-adc/index-working-dog-adc.module';
import { AdminWorkigModule } from './admin-workig/admin-workig.module';
import { LoginModule } from './auth/login/login.module';

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

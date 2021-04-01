import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexWorkingDogAdcRoutingModule } from './index-working-dog-adc-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { PlantillaIndexWorkingDogAdcComponent } from './plantilla-index-working-dog-adc/plantilla-index-working-dog-adc.component';
import { LoginModule } from '../auth/login/login.module';
import { RegistroModule } from '../auth/registro/registro.module';


@NgModule({
  declarations: [PlantillaIndexWorkingDogAdcComponent],
  imports: [
    CommonModule,
    IndexWorkingDogAdcRoutingModule,
    SharedModule,
    MaterialModule,
    LoginModule,
    RegistroModule,
  ]
})
export class IndexWorkingDogAdcModule { }

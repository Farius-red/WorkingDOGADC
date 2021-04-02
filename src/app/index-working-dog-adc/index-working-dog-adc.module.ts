import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexWorkingDogAdcRoutingModule } from './index-working-dog-adc-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { PlantillaIndexWorkingDogAdcComponent } from './plantilla-index-working-dog-adc/plantilla-index-working-dog-adc.component';
import { LoginModule } from '../auth/login/login.module';
import { RegistroModule } from '../auth/registro/registro.module';

// componentes

import { BodyComponent } from './componentes/body/body.component';
import { SectionComponent } from './componentes/section/section.component';


@NgModule({
  declarations: [PlantillaIndexWorkingDogAdcComponent, BodyComponent,  SectionComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    IndexWorkingDogAdcRoutingModule,
    LoginModule,
    RegistroModule,
    SharedModule,
  ],
  exports: [PlantillaIndexWorkingDogAdcComponent, BodyComponent, SectionComponent]
})
export class IndexWorkingDogAdcModule { }

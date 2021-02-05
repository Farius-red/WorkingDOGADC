import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantillaIndexZigmaRoutingModule } from './plantilla-index-zigma-routing.module';
//componentes
import { LayoutIndexZigmaComponent } from './layout-index-zigma/layout-index-zigma.component';

 //modulos
import { SharedZigmaModule } from '../sharedZigmaInflables/shared-zigma.module';
import { IndexZigmaModule } from '../indexZigmainflables/index-zigma.module';


@NgModule({
  declarations: [LayoutIndexZigmaComponent],
  imports: [
    CommonModule,
    PlantillaIndexZigmaRoutingModule,

    // modulos
    SharedZigmaModule,
    IndexZigmaModule
  ]
})
export class PlantillaIndexZigmaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { SharedZigmaModule } from 'src/app/sharedZigmaInflables/shared-zigma.module';


@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    SharedZigmaModule,

  ]
})
export class RegistroModule { }

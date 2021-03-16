import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 // modulos
import { AdminZigmaRoutingModule } from './admin-zigma-routing.module';
import { SharedZigmaModule } from '../sharedZigmaInflables/shared-zigma.module';
import { MaterialModule } from '../material/material.module';
import { ProductosFormZComponent } from './componentes/productos-form-z/productos-form-z.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayatoutComponent } from './layatout/layatout.component';
import { ListProductZigmaComponent } from './componentes/list-product-zigma/list-product-zigma.component';






@NgModule({
  declarations: [ProductosFormZComponent, LayatoutComponent, ListProductZigmaComponent],
  imports: [
    CommonModule,
    AdminZigmaRoutingModule,
    SharedZigmaModule,
     MaterialModule,
     ReactiveFormsModule,
  ]
})
export class AdminZigmaModule { }

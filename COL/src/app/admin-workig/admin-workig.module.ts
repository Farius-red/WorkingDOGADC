import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminWorkigRoutingModule } from './admin-workig-routing.module';
import { RegistroUsuaWorkingDogComponent } from './componentes/registro-usua-working-dog/registro-usua-working-dog.component';



import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [RegistroUsuaWorkingDogComponent,],
  imports: [
    CommonModule,
    AdminWorkigRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    
    
  ],
  providers:[
    
  ], 

  
})
export class AdminWorkigModule { }

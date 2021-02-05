import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material/material.module';
import { NavModulosWorkingComponent } from './modulos/componentes/nav-modulos-working/nav-modulos-working.component';



@NgModule({
  declarations: [
    
    NavModulosWorkingComponent],
    imports: [
      CommonModule,
      LayoutModule,
      MaterialModule,
      RouterModule
   
   
  ]
})
export class SharedModule { }

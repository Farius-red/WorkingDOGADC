import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloRouting } from './routers/modulo-routing.module';


//componentes

import { PlantillAdmiComponent } from './admin/plantill-admi/plantill-admi.component';
import { BodyAdmiComponent } from './admin/body-admi/body-admi.component';
import { MenuAdmiComponent } from './admin/menu-admi/menu-admi.component';









@NgModule({
  declarations: [

    
    // admi
    PlantillAdmiComponent,
    MenuAdmiComponent,
    BodyAdmiComponent,
    
   

  ],
  imports: [
    CommonModule,
    ModuloRouting
  ]
})
export class ModulosModule { }

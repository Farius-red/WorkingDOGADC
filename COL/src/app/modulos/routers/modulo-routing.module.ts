
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PlantillAdmiComponent } from '../admin/plantill-admi/plantill-admi.component';


const routes: Routes = [
  
 {
   path:'', 
   component: PlantillAdmiComponent
 }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ModuloRouting { }

import { NgModule}  from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


//compontes
import { InicioComponent } from './index/componentes/inicio/inicio.component';






const routes: Routes = [
  
  {
    path : 'WorkingDogADC' , component : InicioComponent
  },
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      {preloadingStrategy: PreloadAllModules , relativeLinkResolution: 'legacy' })
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

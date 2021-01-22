import { NgModule}  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//compontes
import { InicioComponent } from './Componentes/index/inicio/inicio.component';

const routes: Routes = [
  {
    path : 'inicio' , component : InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

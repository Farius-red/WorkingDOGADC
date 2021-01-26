import { NgModule}  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//compontes
import { InicioComponent } from './index/componentes/inicio/inicio.component';



import { PantillaModulosComponent } from './index/modulos.plantilla/pantilla-modulos/pantilla-modulos.component';

const routes: Routes = [
  
  {
    path:'',
    component: PantillaModulosComponent,
    children:[
      {
        path:'', redirectTo: '/admi', pathMatch:'full'
      },
      
      {
        path : 'admi' , 
        loadChildren:() =>  import('./modulos/modulos.module')
            .then(m => m.ModulosModule)
        
      }, 
     
    ]

  },
  {
    path : 'inicio' , component : InicioComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

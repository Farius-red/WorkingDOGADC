import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


// index componentes
import { TiendaComponent } from './index/componentes/tienda/tienda.component';
import { InicioZigmaComponent } from './index/componentes/inicio/inicio.zigma.component';
import { LoginZigmaComponent } from './index/componentes/login-zigma/login-zigma.component';

import { NosotrosZigmaComponent } from './index/componentes/nosotros-zigma/nosotros-zigma.component';
import { RegistroUsuZigmaComponent } from './index/componentes/registro-usu-zigma/registro-usu-zigma.component';
import { LayoutIndexZigmaComponent } from './index/componentes/layout-index-zigma/layout-index-zigma.component';


const routes: Routes = [

  
 { 
   path:'',
   component: LayoutIndexZigmaComponent,
   children:[
        {
          path: '',
          redirectTo: 'Zigmainflables',
          pathMatch:'full',
          },

    { path: 'registro', component: RegistroUsuZigmaComponent},
    { path: 'login', component: LoginZigmaComponent},
    { path: 'inicio', component: InicioZigmaComponent },
    { path: 'nosotros', component: NosotrosZigmaComponent},
    { path: 'tienda', component: TiendaComponent},
   ]
  
  }
   
  
  
   
  
];

@NgModule({
  imports: [
    
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexZigmaRoutingModule { }

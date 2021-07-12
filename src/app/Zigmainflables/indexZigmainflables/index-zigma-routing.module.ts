import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// index componentes
import { TiendaComponent } from './index/componentes/tienda/tienda.component';
import { InicioZigmaComponent } from './index/componentes/inicio/inicio.zigma.component';


import { NosotrosZigmaComponent } from './index/componentes/nosotros-zigma/nosotros-zigma.component';

import { LayoutIndexZigmaComponent } from './index/componentes/layout-index-zigma/layout-index-zigma.component';
import { DetalleProductZigmaComponent } from './index/componentes/tienda/Productos/detalle-product-zigma/detalle-product-zigma.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutIndexZigmaComponent,

    children: [
      {
        path: '',
        redirectTo: 'Zigmainflables/inicio',
        pathMatch: 'prefix',
      },

      { path: 'login', loadChildren: () => import('../../auth/login/login.module').then(m => m.LoginModule) },
      { path: 'registro', loadChildren: () => import('../../auth/registro/registro.module').then(m => m.RegistroModule) },
      { path: 'inicio', component: InicioZigmaComponent },
      { path: 'nosotros', component: NosotrosZigmaComponent },
      { path: 'tienda', component: TiendaComponent },
      { path: 'tienda/:id', component: DetalleProductZigmaComponent },
    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexZigmaRoutingModule {}

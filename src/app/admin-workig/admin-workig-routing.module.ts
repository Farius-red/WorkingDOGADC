import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes admin working
import { DaskAdminComponent } from './dask-admin/dask-admin.component';

import { ListaClientesComponent } from './componentes/crudusuarios/lista-clientes/lista-clientes.component';
import { CrearUsuaWorkingDogComponent } from './componentes/crudusuarios/crear-usua-working-dog/crear-usua-working-dog.component';


const routes: Routes = [
  {
    path: '',
    component: DaskAdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'adminWorkingDOG',
      },
      {
        path: 'listaUsuarios',
        component: ListaClientesComponent
      },
      { path: 'crearUsuario', component: CrearUsuaWorkingDogComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminWorkigRoutingModule {}

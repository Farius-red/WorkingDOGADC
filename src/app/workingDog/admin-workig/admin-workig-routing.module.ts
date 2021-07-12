import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes admin working
import { DaskAdminComponent } from './dask-admin/dask-admin.component';

// Crud usuarios
import { ListaClientesComponent } from './componentes/crudusuarios/lista-clientes/lista-clientes.component';
import { CrearUsuaWorkingDogComponent } from './componentes/crudusuarios/crear-usua-working-dog/crear-usua-working-dog.component';
// crud Productos
import { ListaProductWorkingDogComponent } from './componentes/crudProductos/lista-product-working-dog/lista-product-working-dog.component';
import { CrearProductWorkingDogComponent } from './componentes/crudProductos/crear-product-working-dog/crear-product-working-dog.component';

// Crud servicios
import { NuevoServicioWorkingDogComponent } from './componentes/crudServicios/nuevo-servicio-working-dog/nuevo-servicio-working-dog.component';
import { ListaServiciosWorkingDogComponent } from './componentes/crudServicios/lista-servicios-working-dog/lista-servicios-working-dog.component';
import { ListaCortesWorkingDogComponent } from './componentes/crudServicios/lista-cortes-working-dog/lista-cortes-working-dog.component';
import { AuthGuard } from 'src/app/core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DaskAdminComponent,

    children: [
      {
        path: '',
        redirectTo: 'adminWorkingDOG',
      },
      //  Crud Usuarios
      { path: 'listaUsuarios', component: ListaClientesComponent },
      { path: 'crearUsuario', component: CrearUsuaWorkingDogComponent },
      { path: 'crearUsuario/:id', component: CrearUsuaWorkingDogComponent },
      // Crud Productos
      { path: 'listaProductos', component: ListaProductWorkingDogComponent },
      { path: 'CrearProductos', component: CrearProductWorkingDogComponent },
      // Crud servicios

      { path: 'listaServicios', component: ListaServiciosWorkingDogComponent },
      { path: 'nuevoServicio', component: NuevoServicioWorkingDogComponent },
      { path: 'listaCortes', component: ListaCortesWorkingDogComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminWorkigRoutingModule {}

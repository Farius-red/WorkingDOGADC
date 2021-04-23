import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminWorkigRoutingModule } from './admin-workig-routing.module';



import { ReactiveFormsModule } from '@angular/forms';
import { DaskAdminComponent } from './dask-admin/dask-admin.component';
import { ListaClientesComponent } from './componentes/crudusuarios/lista-clientes/lista-clientes.component';
import { MenuNavegacionContactosComponent } from './componentes/crudusuarios/lista-clientes/menu-navegacion-contactos/menu-navegacion-contactos.component';
import { CrearUsuaWorkingDogComponent } from './componentes/crudusuarios/crear-usua-working-dog/crear-usua-working-dog.component';
import { CrearProductWorkingDogComponent } from './componentes/crudProductos/crear-product-working-dog/crear-product-working-dog.component';
import { ListaProductWorkingDogComponent } from './componentes/crudProductos/lista-product-working-dog/lista-product-working-dog.component';

import { NuevoServicioWorkingDogComponent } from './componentes/crudServicios/nuevo-servicio-working-dog/nuevo-servicio-working-dog.component';

import { ListaServiciosWorkingDogComponent } from './componentes/crudServicios/lista-servicios-working-dog/lista-servicios-working-dog.component';
import { ListaCortesWorkingDogComponent } from './componentes/crudServicios/lista-cortes-working-dog/lista-cortes-working-dog.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    DaskAdminComponent,
    ListaClientesComponent,
    MenuNavegacionContactosComponent,
    CrearUsuaWorkingDogComponent,
    CrearProductWorkingDogComponent,
    ListaProductWorkingDogComponent,
    NuevoServicioWorkingDogComponent,
    ListaServiciosWorkingDogComponent,
    ListaCortesWorkingDogComponent,
  ],
  imports: [
    CommonModule,
    AdminWorkigRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],

  exports: [],
})
export class AdminWorkigModule {}

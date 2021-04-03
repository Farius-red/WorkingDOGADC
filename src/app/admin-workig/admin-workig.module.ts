import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminWorkigRoutingModule } from './admin-workig-routing.module';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DaskAdminComponent } from './dask-admin/dask-admin.component';
import { ListaClientesComponent } from './componentes/crudusuarios/lista-clientes/lista-clientes.component';
import { MenuNavegacionContactosComponent } from './componentes/crudusuarios/lista-clientes/menu-navegacion-contactos/menu-navegacion-contactos.component';
import { CrearUsuaWorkingDogComponent } from './componentes/crudusuarios/crear-usua-working-dog/crear-usua-working-dog.component';
import { CrearProductWorkingDogComponent } from './componentes/crudProductos/crear-product-working-dog/crear-product-working-dog.component';
import { ListaProductWorkingDogComponent } from './componentes/crudProductos/lista-product-working-dog/lista-product-working-dog.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    DaskAdminComponent,
    ListaClientesComponent,
    MenuNavegacionContactosComponent,
    CrearUsuaWorkingDogComponent,
    CrearProductWorkingDogComponent,
    ListaProductWorkingDogComponent,
  ],
  imports: [
    CommonModule,
    AdminWorkigRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],

  exports: [],
})
export class AdminWorkigModule {}

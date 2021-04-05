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
import { NuevoServicioWorkingDogComponent } from './componentes/crudServicios/nuevo-servicio-working-dog/nuevo-servicio-working-dog.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ListaServiciosWorkingDogComponent } from './componentes/crudServicios/lista-servicios-working-dog/lista-servicios-working-dog.component';
import { ListaCortesWorkingDogComponent } from './componentes/crudServicios/lista-cortes-working-dog/lista-cortes-working-dog.component';

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
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
  providers: [],

  exports: [],
})
export class AdminWorkigModule {}

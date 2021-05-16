import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminWorkigRoutingModule } from './admin-workig-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
// tslint:disable-next-line:max-line-length
import { PlantillaAdiestramientoComponent } from './componentes/adiestramientos/plantilla-adiestramiento/plantilla-adiestramiento.component';
import { ListaAdiestramientoComponent } from './componentes/adiestramientos/lista-adiestramiento/lista-adiestramiento.component';

import { ModalDeleteUsuComponent } from './modal-delete-usu/modal-delete-usu.component';
import { ModalDeleteUComponent } from './componentes/crudusuarios/modal-delete-u/modal-delete-u.component';
import { ConfirmacionComponent } from './componentes/crudusuarios/confirmacion/confirmacion.component';

@NgModule({
  declarations: [
    DaskAdminComponent,

// crud usuarios
    ListaClientesComponent,
    MenuNavegacionContactosComponent,
    CrearUsuaWorkingDogComponent,
// crud productos

    CrearProductWorkingDogComponent,
    ListaProductWorkingDogComponent,

    // crud servicios
    NuevoServicioWorkingDogComponent,
    ListaServiciosWorkingDogComponent,
    ListaCortesWorkingDogComponent,

    PlantillaAdiestramientoComponent,
    ListaAdiestramientoComponent,

    // modales
    ModalDeleteUsuComponent,
    ModalDeleteUComponent,
    ConfirmacionComponent,


  ],
  imports: [
    CommonModule,
    AdminWorkigRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,

    FormsModule,
  ],
  providers: [],

  exports: [],
  entryComponents: [ModalDeleteUsuComponent, ConfirmacionComponent],
})
export class AdminWorkigModule {}

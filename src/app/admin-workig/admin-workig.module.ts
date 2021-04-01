import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminWorkigRoutingModule } from './admin-workig-routing.module';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuAdmWorkingComponent } from './componentes/menu-adm-working/menu-adm-working.component';

@NgModule({
  declarations: [MenuAdmWorkingComponent],
  imports: [
    CommonModule,
    AdminWorkigRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],

  exports: [MenuAdmWorkingComponent]
})
export class AdminWorkigModule {}

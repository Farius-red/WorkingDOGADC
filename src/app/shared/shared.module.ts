import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material/material.module';

// componentes index

import { FooterWorkingDComponent } from './index/componentes/footer/footer.workingD.component';
import { NavWorkingDogADCComponent } from './index/componentes/nav-working-dog-adc/nav-working-dog-adc.component';

// componentes modulos
import { DaskboardComponent } from './modulos/componentes/daskboard/daskboard.component';
import { HeaderDaskWorkingDOGComponent } from './modulos/componentes/header-dask-working-dog/header-dask-working-dog.component';
import { NavDaskWorkingDOGComponent } from './modulos/componentes/nav-dask-working-dog/nav-dask-working-dog.component';

@NgModule({
  declarations: [
    FooterWorkingDComponent,
    NavWorkingDogADCComponent,
    DaskboardComponent,
    HeaderDaskWorkingDOGComponent,
    NavDaskWorkingDOGComponent,
  ],
  imports: [CommonModule, LayoutModule, MaterialModule, RouterModule],

  exports: [
    FooterWorkingDComponent,
    NavWorkingDogADCComponent,
    DaskboardComponent,
    HeaderDaskWorkingDOGComponent,
    NavDaskWorkingDOGComponent,
  ],
})
export class SharedModule {}

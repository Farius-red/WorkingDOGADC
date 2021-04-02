import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material/material.module';

// componentes index

import { FooterWorkingDComponent } from './index/componentes/footer/footer.workingD.component';

import { NavWorkingDogADCComponent } from './index/componentes/nav-working-dog-adc/nav-working-dog-adc.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// componentes modulos
@NgModule({
  declarations: [FooterWorkingDComponent, NavWorkingDogADCComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],

  exports: [FooterWorkingDComponent, NavWorkingDogADCComponent],
})
export class SharedModule {}

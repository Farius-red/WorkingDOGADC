import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material/material.module';

// componentes index

import { BodyComponent } from './index/componentes/body/body.component';
import { FooterWorkingDComponent } from './index/componentes/footer/footer.workingD.component';
import { HeaderComponent } from './index/componentes/header/header.component';
import { SectionComponent } from './index/componentes/section/section.component';

// componentes modulos
@NgModule({
  declarations: [
    BodyComponent,
    FooterWorkingDComponent,
    HeaderComponent,
    SectionComponent,
  ],
  imports: [CommonModule, LayoutModule, MaterialModule, RouterModule],

  exports: [
    BodyComponent,
    FooterWorkingDComponent,
    HeaderComponent,
    SectionComponent,
  ],
})
export class SharedModule {}

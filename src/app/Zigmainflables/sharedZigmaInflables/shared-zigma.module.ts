import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavZigmaComponent } from './compIndexZIGMA/nav-zigma/nav-zigma.component';
import { FooterComponent } from './compIndexZIGMA/footer/footer.component';
import { MaterialModule } from '../../material/material.module';
import { PlantillaModulosZigmaComponent } from './plantilla-modulos-zigma/plantilla-modulos-zigma.component';
import { HeaderModulosZigmaComponent } from './componentesModulos/componentes/header-modulos-zigma/header-modulos-zigma.component';
import { NavModulosZigmaComponent } from './componentesModulos/componentes/nav-modulos-zigma/nav-modulos-zigma.component';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    NavZigmaComponent,
    FooterComponent,
    PlantillaModulosZigmaComponent,
    HeaderModulosZigmaComponent,
    NavModulosZigmaComponent,

  ],
  imports: [
    CommonModule, RouterModule, MaterialModule, ReactiveFormsModule ,
  ],
  exports: [
    NavZigmaComponent,
    FooterComponent,
    CommonModule,
    PlantillaModulosZigmaComponent,
    HeaderModulosZigmaComponent,
    NavModulosZigmaComponent,
    ReactiveFormsModule,


  ],

  providers: [  ],
})
export class SharedZigmaModule {}

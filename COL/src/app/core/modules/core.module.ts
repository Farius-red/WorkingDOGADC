import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//servicios working dog ADC
import { ProductosWorkingDOGService } from '../servicios/workingdogADC/productos/productos-working-dog.service';
import { UsuariosServiceWorkingdog } from '../servicios/workingdogADC/usuarios/usuarios.Workingdo.service';

//servicios zigmainfalbles 

import { ProductosService } from '../servicios/Zigmainflables/productos/productos.service';
import {  UsuariosServiceZigma } from '../servicios/Zigmainflables/usuarios/usuarios.zigma.service';


@NgModule({
  declarations: [

 
  ],
  imports: [
    CommonModule
  ],
  providers:[
    //workingdog
    ProductosWorkingDOGService,
    UsuariosServiceWorkingdog,

    //zigmainflables
    ProductosService,
    UsuariosServiceZigma,
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexZigmaRoutingModule } from './index-zigma-routing.module';


//fire base
import { AngularFireModule } from '@angular/fire';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';




import { environment } from 'src/environments/environment';

//servicios 
import { UsuariosServiceZigma } from '../core/servicios/Zigmainflables/usuarios/usuarios.zigma.service';
import { ProductosService } from '../core/servicios/Zigmainflables/productos/productos.service';

//componentes
import { LoginZigmaComponent } from './index/componentes/login-zigma/login-zigma.component';
import { RegistroUsuZigmaComponent } from './index/componentes/registro-usu-zigma/registro-usu-zigma.component';
import { NosotrosZigmaComponent } from './index/componentes/nosotros-zigma/nosotros-zigma.component';





@NgModule({
  declarations: [
    LoginZigmaComponent, 
    RegistroUsuZigmaComponent, 
    NosotrosZigmaComponent,
     ],
  imports: [
    CommonModule,
    IndexZigmaRoutingModule,
    //fire base
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,

    // modulos
          

  ],
  providers:[
    UsuariosServiceZigma,
    ProductosService,
  ]
})
export class IndexZigmaModule { }

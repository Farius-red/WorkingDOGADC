import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


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
import { LayoutIndexZigmaComponent } from './index/componentes/layout-index-zigma/layout-index-zigma.component';
import { SharedZigmaModule } from '../sharedZigmaInflables/shared-zigma.module';
import { BrowserModule } from '@angular/platform-browser';






@NgModule({
  declarations: [
    LoginZigmaComponent, 
    RegistroUsuZigmaComponent, 
    NosotrosZigmaComponent,
    LayoutIndexZigmaComponent,
     ],
  imports: [

    CommonModule,
    RouterModule,
    IndexZigmaRoutingModule,
    //fire base
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    
    // modulos
    SharedZigmaModule,
    
  ],
  providers:[
    UsuariosServiceZigma,
    ProductosService,
  ],

  exports:[
    LoginZigmaComponent, 
    RegistroUsuZigmaComponent, 
    NosotrosZigmaComponent,
    LayoutIndexZigmaComponent,
  ]
})
export class IndexZigmaModule { }

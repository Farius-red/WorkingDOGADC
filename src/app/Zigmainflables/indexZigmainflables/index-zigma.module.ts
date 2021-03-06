import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexZigmaRoutingModule } from './index-zigma-routing.module';

// fire base
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';

// servicios
import { UsuariosServiceZigma } from '../../core/servicios/Zigmainflables/usuarios/usuarios.zigma.service';
import { ProductosService } from '../../core/servicios/Zigmainflables/productos/productos.service';

// componentes

import { RegistroUsuZigmaComponent } from './index/componentes/registro-usu-zigma/registro-usu-zigma.component';
import { NosotrosZigmaComponent } from './index/componentes/nosotros-zigma/nosotros-zigma.component';
import { LayoutIndexZigmaComponent } from './index/componentes/layout-index-zigma/layout-index-zigma.component';
import { SharedZigmaModule } from '../sharedZigmaInflables/shared-zigma.module';
import { TiendaComponent } from './index/componentes/tienda/tienda.component';
import { ProductosEcuComponent } from './index/componentes/tienda/Productos/productos-ecu/productos-ecu.component';
import { DetalleProductZigmaComponent } from './index/componentes/tienda/Productos/detalle-product-zigma/detalle-product-zigma.component';
import { LoginModule } from '../../auth/login/login.module';
import { RegistroModule } from '../../auth/registro/registro.module';
import { TarjetaComponent } from './index/componentes/tarjeta/tarjeta.component';
import { InicioZigmaComponent } from './index/componentes/inicio/inicio.zigma.component';


@NgModule({
  declarations: [

    InicioZigmaComponent,
    RegistroUsuZigmaComponent,
    NosotrosZigmaComponent,
    LayoutIndexZigmaComponent,
    TiendaComponent,
    ProductosEcuComponent,
    DetalleProductZigmaComponent,
    TarjetaComponent,





  ],
  imports: [
    CommonModule,
    RouterModule,
    IndexZigmaRoutingModule,
    // fire base

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,


    // modulos
    SharedZigmaModule,
    LoginModule,
    RegistroModule,
  ],
  providers: [UsuariosServiceZigma, ProductosService],

  exports: [

    RegistroUsuZigmaComponent,
    NosotrosZigmaComponent,
    LayoutIndexZigmaComponent,
    TarjetaComponent,



  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IndexZigmaModule {}

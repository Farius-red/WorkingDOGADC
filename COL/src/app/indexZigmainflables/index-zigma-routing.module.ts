import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// index componentes
import { TiendaComponent } from './index/componentes/tienda/tienda.component';
import { InicioZigmaComponent } from './index/componentes/inicio/inicio.zigma.component';
import { LoginZigmaComponent } from './index/componentes/login-zigma/login-zigma.component';
import { RegistroUsuaWorkingDogComponent } from '../admin-workig/componentes/registro-usua-working-dog/registro-usua-working-dog.component';
import { NosotrosZigmaComponent } from './index/componentes/nosotros-zigma/nosotros-zigma.component';


const routes: Routes = [

  { path: 'registro', component: RegistroUsuaWorkingDogComponent},
  { path: 'login', component: LoginZigmaComponent},
  { path: 'inicio', component: InicioZigmaComponent },
  { path: 'nosotros', component: NosotrosZigmaComponent},
  { path: 'tienda', component: TiendaComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexZigmaRoutingModule { }

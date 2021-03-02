import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosFormZComponent } from './componentes/productos-form-z/productos-form-z.component';
import { LayatoutComponent } from './layatout/layatout.component';

const routes: Routes = [
  {
    path: 'adminZigma',
    component: LayatoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'adminZigma',
        pathMatch: 'full',
      },

      { path: 'crearProducto', component: ProductosFormZComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminZigmaRoutingModule {}

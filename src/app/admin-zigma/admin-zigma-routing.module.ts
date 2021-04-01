import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductZigmaComponent } from './componentes/list-product-zigma/list-product-zigma.component';
import { ProductosFormZComponent } from './componentes/productos-form-z/productos-form-z.component';
import { LayatoutComponent } from './layatout/layatout.component';

const routes: Routes = [
  {
    path: 'adminZigma',
    component: LayatoutComponent,
    children: [


      { path: 'crearProducto', component: ProductosFormZComponent },
      { path: 'ListaProductos', component: ListProductZigmaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminZigmaRoutingModule {}

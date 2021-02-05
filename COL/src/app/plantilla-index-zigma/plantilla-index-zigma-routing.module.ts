import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayoutIndexZigmaComponent } from './layout-index-zigma/layout-index-zigma.component';

const routes: Routes = [
{
  path:'inicioZigmainflables', 
  component: LayoutIndexZigmaComponent,
  children:[
     {
       path:'inicioZigmainflables',
       redirectTo:'/Zigmainflables',
       pathMatch:'full'
      },
      {
        path: 'registro', loadChildren:() =>  import('./../indexZigmainflables/index-zigma.module')
        .then(m =>  m.IndexZigmaModule)
      },

      { 
        path: 'login', loadChildren:() =>  import('./../indexZigmainflables/index-zigma.module')
        .then(m =>  m.IndexZigmaModule)
      },
      
      { 
         path: 'inicio', loadChildren:() =>  import('./../indexZigmainflables/index-zigma.module')
        .then(m =>  m.IndexZigmaModule) 
      },

      { 
         path: 'nosotros',loadChildren:() =>  import('./../indexZigmainflables/index-zigma.module')
        .then(m =>  m.IndexZigmaModule)
       },

      { 
        path: 'tienda', loadChildren:() =>  import('./../indexZigmainflables/index-zigma.module')
        .then(m =>  m.IndexZigmaModule)
      },

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantillaIndexZigmaRoutingModule { }

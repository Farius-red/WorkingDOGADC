import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes admin working
import { RegistroUsuaWorkingDogComponent } from './componentes/registro-usua-working-dog/registro-usua-working-dog.component';
import { MenuAdmWorkingComponent } from './componentes/menu-adm-working/menu-adm-working.component';


const routes: Routes = [
{
  outlet: 'primary',
  path:'',
  children:[
    {
      path:'crear',
      outlet : 'menu',
      component: MenuAdmWorkingComponent
    },
    {
      path:'crear',
      outlet : 'body',
      component: RegistroUsuaWorkingDogComponent
    }
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminWorkigRoutingModule { }

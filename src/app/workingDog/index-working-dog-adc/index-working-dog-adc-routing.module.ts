import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './componentes/body/body.component';

// componentes
import { PlantillaIndexWorkingDogAdcComponent } from './plantilla-index-working-dog-adc/plantilla-index-working-dog-adc.component';

const routes: Routes = [
  {
    path: '',
    component: PlantillaIndexWorkingDogAdcComponent,
    children: [
      {
        path: '',
        redirectTo: 'WorkingDogADC/inicio',
        pathMatch: 'full',
      },

      {
        path: 'login',
        loadChildren: () =>
          import('../../auth/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'registro',
        loadChildren: () =>
          import('../../auth/registro/registro.module').then(
            (m) => m.RegistroModule
          ),
      },

      { path: 'inicio', component: BodyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexWorkingDogAdcRoutingModule {}

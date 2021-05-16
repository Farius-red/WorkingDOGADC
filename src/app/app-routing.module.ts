import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [

   { path: '',   redirectTo: '/WorkingDogADC/inicio', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  // working Dog
  {
    path: 'WorkingDogADC',
    loadChildren: () =>
      import('./workingDog/index-working-dog-adc/index-working-dog-adc.module').then(
        (m) => m.IndexWorkingDogAdcModule
      ),
  },

  // zigma inflables
  {
    path: 'Zigmainflables',
    loadChildren: () =>
      import('./Zigmainflables/indexZigmainflables/index-zigma.module').then(
        (m) => m.IndexZigmaModule
      ),
  },


  {
    path: 'adminZigma',
    loadChildren: () =>
      import('./Zigmainflables/admin-zigma/admin-zigma-routing.module').then(
        (m) => m.AdminZigmaRoutingModule
      ),
  },




  {
    path: 'adminWorkingDog',
    loadChildren: () =>
      import('./workingDog/admin-workig/admin-workig.module').then(
        (m) => m.AdminWorkigModule
      ),
  },
  {
    path: 'adiestrador',
    loadChildren: () =>
      import('./workingDog/adiestrador-working-dog/adiestrador-working-dog.module').then(
        (m) => m.AdiestradorWorkingDogModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

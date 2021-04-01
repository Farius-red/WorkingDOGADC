import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'Zigmainflables',
    loadChildren: () =>
      import('./indexZigmainflables/index-zigma.module').then(
        (m) => m.IndexZigmaModule
      ),
  },
  {
    path: 'WorkingDogADC',
    loadChildren: () =>
      import('./index-working-dog-adc/index-working-dog-adc.module').then(
        (m) => m.IndexWorkingDogAdcModule
      ),
  },

  {
    path: 'adminZigma',
    loadChildren: () =>
      import('./admin-workig/admin-workig.module').then(
        (m) => m.AdminWorkigModule
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

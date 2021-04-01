import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { PlantillaIndexWorkingDogAdcComponent } from './plantilla-index-working-dog-adc/plantilla-index-working-dog-adc.component';

const routes: Routes = [

  {
    path: '',
    component: PlantillaIndexWorkingDogAdcComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexWorkingDogAdcRoutingModule { }

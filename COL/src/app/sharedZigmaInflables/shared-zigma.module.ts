import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavZigmaComponent } from './compIndexZIGMA/nav-zigma/nav-zigma.component';
import { FooterComponent } from './compIndexZIGMA/footer/footer.component';




@NgModule({
  declarations: [
    NavZigmaComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    
    RouterModule,
    
  ],
  exports:[
    NavZigmaComponent,
    FooterComponent,
    CommonModule,
  ]
})
export class SharedZigmaModule { }

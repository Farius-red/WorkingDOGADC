import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material form

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


// material daskboard
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,

    // form 
      MatInputModule,
       MatButtonModule,
       MatSelectModule,
       MatRadioModule,
       MatCardModule,
     
       // dask
       MatGridListModule,
       MatMenuModule,
       MatIconModule,

       MatListModule ,
       MatToolbarModule ,
       MatSidenavModule ,
  ],
  exports:[
    // form 
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  
    // dask
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
  //nav
    MatListModule ,
       MatToolbarModule ,
       MatSidenavModule ,
  ]
})
export class MaterialModule { }

import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/servicios/ServiciosCompartidos/auth.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-Dask-WorkingDOG',
  templateUrl: './nav-dask-working-dog.component.html',
  styleUrls: ['./nav-dask-working-dog.component.css']
})
export class NavDaskWorkingDOGComponent implements OnInit {

 @Input() usuario: any;
 @Input() isLogged;
  @Input() user$;

  public log;
  constructor() {


  }

  // tslint:disable-next-line:typedef
  ngOnInit() { }


}

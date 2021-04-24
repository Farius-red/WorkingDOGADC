import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/servicios/ServiciosCompartidos/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header-Dask-WorkingDOG',
  templateUrl: './header-dask-working-dog.component.html',
  styleUrls: ['./header-dask-working-dog.component.css']
})
export class HeaderDaskWorkingDOGComponent implements OnInit {

@Input() isLogged;
@Input() usuario: any;
@Input() user$: any;

  constructor(private  authSvc: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
 async cerrarSesion(){
    this.authSvc.logout();

    try {
      console.log('clic en cerrar sesion');
      this.router.navigate(['/WorkingDogADC/inicio']);

    } catch (error) {
      console.log(error);
    }
  }

}

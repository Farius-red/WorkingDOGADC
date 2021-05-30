import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/servicios/ServiciosCompartidos/auth.service';


@Component({
  selector: 'app-daskboard',
  templateUrl: './daskboard.component.html',
  styleUrls: ['./daskboard.component.css']
})
export class DaskboardComponent implements OnInit {

  // tslint:disable-next-line:typedef-whitespace
  public isLogged = false;
  public usuario: any;
  public user$: Observable<any> = this.authSvc.auth.user;

  // para diseño

  public btn = document.querySelector('#menu-btn');
  public expandir = 'menu-collapsed';
  public bodyExpanded = 'body-peque';

  constructor(private authSvc: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.bodyExpanded = 'body-peque';
  }


  // tslint:disable-next-line:typedef
  expanded() {
    switch (this.expandir) {
      case 'menu-collapsed':
        this.expandir = 'menu-expanded';

        this.bodyExpanded = 'body-expanded';
        break;
      case 'menu-expanded':
        this.expandir = 'menu-collapsed';
        this.bodyExpanded = 'body-peque';
        break;
      default:
        break;
    }
  }

  // tslint:disable-next-line:typedef
  async cerrarSesion() {
    this.authSvc.logout();

    try {
      console.log('clic en cerrar sesion');
      this.router.navigate(['/WorkingDogADC/inicio']);

    } catch (error) {
      console.log(error);
    }
  }
}

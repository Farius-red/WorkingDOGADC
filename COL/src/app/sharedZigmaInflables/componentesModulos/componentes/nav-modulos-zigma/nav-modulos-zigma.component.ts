import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servicios/ServiciosCompartidos/auth.service';

@Component({
  selector: 'app-nav-modulos-zigma',
  templateUrl: './nav-modulos-zigma.component.html',
  styleUrls: ['./nav-modulos-zigma.component.css'],

})
export class NavModulosZigmaComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  // tslint:disable-next-line:typedef
 ngOnInit(){
  this.usuariosLog();
  console.log('nav funciona111');
  }

  // tslint:disable-next-line:typedef
  async usuariosLog(){
  console.log('nav funciona111');
  const user = await this.authSvc.getCurrentUser();
  if (user) {

    console.log('user', user);
  }else{
    console.log('usuario no existe');
  }
 }

}

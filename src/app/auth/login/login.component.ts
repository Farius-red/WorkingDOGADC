import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/servicios/ServiciosCompartidos/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginUsuarios = new FormGroup({
    email: new FormControl(''),
    clave: new FormControl(''),
  });
  constructor(private autSvc: AuthService, private router: Router ) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  async onlogin() {
    const { email, clave } = this.LoginUsuarios.value;
    try {
      const user = await this.autSvc.login(email, clave);
      if (user) {
        // redireccion a modulo
        this.router.navigate(['/adminWorkingDog']);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  cerrarSesion() {
    this.autSvc.logout();
  }
}

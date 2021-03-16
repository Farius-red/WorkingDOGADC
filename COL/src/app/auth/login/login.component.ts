import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/servicios/ServiciosCompartidos/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login = false;
  public user: any;

  LoginUsuarios = new FormGroup({
      email: new FormControl(''),
      clave: new FormControl('')
  });
  constructor(private autSvc: AuthService) { }

  ngOnInit(): void {
    this.verificarUsuLog();

  }

  // tslint:disable-next-line:typedef
  onlogin(){
    const{email, clave} = this.LoginUsuarios.value;
    this.autSvc.login(email, clave);
  }


 // tslint:disable-next-line:typedef
 async verificarUsuLog(){
      this.user = await this.autSvc.getCurrentUser();
      if (this.user) {

         this.login = true;

      }
  }

  // tslint:disable-next-line:typedef
  cerrarSesion(){
    this.autSvc.logout();
  }
}

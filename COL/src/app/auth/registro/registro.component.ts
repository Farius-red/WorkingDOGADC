import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/servicios/ServiciosCompartidos/auth.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public RegistroExitoso = false;
  registerForm = new FormGroup({
        email: new FormControl(''),
        telefono: new FormControl(''),
        nombre: new FormControl(''),
        clave: new FormControl('')
  });

  constructor( private authSvc: AuthService) {

   }

  ngOnInit(): void {
  }


   // tslint:disable-next-line:typedef
   onRegister(){
      this.RegistroExitoso = true;
      const {email, clave} = this.registerForm.value;
      this.authSvc.registro(email , clave );
      console.log('Form', this.registerForm.value);

   }
}

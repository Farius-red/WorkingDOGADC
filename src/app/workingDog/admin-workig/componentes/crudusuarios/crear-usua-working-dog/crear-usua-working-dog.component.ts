import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuariosWorkingdog } from 'src/app/core/modelos/usuariosZig/usuariosWorkingDog.model';
import { UsuariosServiceWorkingdog } from 'src/app/core/servicios/workingdogADC/usuarios/usuarios.Workingdo.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'crear-usua-workingDog',
  templateUrl: './crear-usua-working-dog.component.html',
  styleUrls: ['./crear-usua-working-dog.component.css'],
})
export class CrearUsuaWorkingDogComponent implements OnInit {
  usuario;


  public newUsu = this.fb.group( {
    nombre: [null, Validators.required],
    mascota: [null],
    direccion: [null],
    telefono: [null, Validators.required],
    ciudad: [null, Validators.required],
    rol: ['cliente', Validators.required]

  });


  hasUnitNumber = false;
  ciudad = [
    {name: 'Quito', },
    {name: 'Bogota', },
    {name: 'Cuenca', },
  ];

  constructor(
    public usuarios: UsuariosServiceWorkingdog,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private rout: Router,
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
    });
  }

  // tslint:disable-next-line:typedef
  guardar() {
      this.usuarios.editUsuarios(this.usuarios.usu);

  }

  // tslint:disable-next-line:typedef
  create(){
    this.usuarios.createUsu(this.newUsu.value);
    this.rout.navigate(['/listaUsuarios']);
  }
}

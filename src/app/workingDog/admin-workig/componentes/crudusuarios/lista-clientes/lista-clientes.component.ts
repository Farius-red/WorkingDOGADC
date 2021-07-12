import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { UsuariosWorkingdog } from 'src/app/core/modelos/usuariosZig/usuariosWorkingDog.model';
import { UsuariosServiceWorkingdog } from 'src/app/core/servicios/workingdogADC/usuarios/usuarios.Workingdo.service';
import { ModalDeleteUComponent } from '../modal-delete-u/modal-delete-u.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'listaClientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  public usuarios: UsuariosWorkingdog[];
  verions = VERSION;
  constructor(
    private usuariosW: UsuariosServiceWorkingdog,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  // tslint:disable-next-line:typedef
  listarUsuarios() {
    this.usuariosW.getAllUsuarios().subscribe((res) => (this.usuarios = res));
  }
  // tslint:disable-next-line:typedef
  verMas() {
    console.log('se clic ver mas');
  }

  // tslint:disable-next-line:typedef
  async updateCostumer(usu) {
    console.log('se dio click en update', usu);
    if (usu) {
      this.usuariosW.usu = usu;
    }
  }

  // tslint:disable-next-line:typedef
  deleteCostumer(id: string) {
    console.log('se dio clic en delete', id);
    this.usuariosW.deleteUsuario(id);
  }

  openMoldai(id: string, nombre): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'eliminar usu',
      id,
      nombre,
    };

    this.dialog.open(ModalDeleteUComponent, dialogConfig);
    this.snackBar.open('hola');
  }

  openMoldal(id: string, nombre: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'eliminar usu',
      id,
      nombre,
    };
    const dialogRef = this.dialog.open(ModalDeleteUComponent, dialogConfig);


    dialogRef.afterClosed().subscribe((showSnackBar: boolean) => {
      if (showSnackBar) {

        const a = document.createElement('a');
        a.click();
        a.remove();
        this.snackBar.openFromComponent(ConfirmacionComponent, {
          duration: 2000,
        });
      }
    });
  }
}

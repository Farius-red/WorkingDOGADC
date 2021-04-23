import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosServiceWorkingdog } from 'src/app/core/servicios/workingdogADC/usuarios/usuarios.Workingdo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-delete-u',
  templateUrl: './modal-delete-u.component.html',
  styleUrls: ['./modal-delete-u.component.css'],
})
export class ModalDeleteUComponent implements OnInit {
   public duracion = 5;

  constructor(
    private dialogRef: MatDialogRef<ModalDeleteUComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; id; nombre: string },
    private usuariosW: UsuariosServiceWorkingdog,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void { }

  // tslint:disable-next-line:typedef
  deleteCostumer(id: string) {
    console.log('se dio clic en delete', id);
    this.usuariosW.deleteUsuario(id);
    this.dialogRef.close(true);
  }
  close(): void {
    this.dialogRef.close();
  }

  openSnackBar(): void  {
    this.snack.openFromComponent(ConfirmacionComponent, {
      duration: this.duracion * 1000,
    });
 }
}

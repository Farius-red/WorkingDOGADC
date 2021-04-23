import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuariosWorkingdog } from 'src/app/core/modelos/usuariosZig/usuariosWorkingDog.model';

@Injectable({
  providedIn: 'root',
})
export class UsuariosServiceWorkingdog {
  private usuariosWorkingDog: AngularFirestoreCollection<UsuariosWorkingdog>;
  usuariosWorking: Observable<UsuariosWorkingdog[]>;

  public usu = {
    id: null,
    nombre: '',
    telefono: null,
    direccion: '',
    ciudad: '',
    mascota: '',
    rol: '',
  };

  public hasUnitNumber = false;

  public ciudad = [{ name: 'Quito' }, { name: 'Bogota' }, { name: 'Cuenca' }];

  constructor(private readonly afs: AngularFirestore) {
    this.usuariosWorkingDog = this.afs.collection<UsuariosWorkingdog>(
      'usuariosWorking'
    );
    this.usuariosWorking = this.usuariosWorkingDog.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as UsuariosWorkingdog;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  // tslint:disable-next-line:typedef
  getAllUsuarios() {
    return this.usuariosWorking;
  }

  // tslint:disable-next-line:typedef
  editUsuarios(usuario: UsuariosWorkingdog) {
    return this.usuariosWorkingDog.doc(usuario.id).update(usuario);
  }

  // tslint:disable-next-line:typedef
  deleteUsuario(id: string) {
    return this.usuariosWorkingDog.doc(id).delete();
  }

  // tslint:disable-next-line:typedef
  createUsu(usuario: UsuariosWorkingdog) {
    return this.usuariosWorkingDog.add(usuario);
  }
}

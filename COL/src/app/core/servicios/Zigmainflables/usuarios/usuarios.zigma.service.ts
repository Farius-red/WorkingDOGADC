import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

export interface Usuario {
  FechaDeCreacion: any;
  apellido:string;
  clave:string;
  nombres:string;
  rol:string;
  telefono:number;
}


@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceZigma {
  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;
  constructor(private afs: AngularFirestore) { 

    this.usuariosCollection = afs.collection<Usuario>('usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listarUsuario(){
    return this.usuarios;
  }
}

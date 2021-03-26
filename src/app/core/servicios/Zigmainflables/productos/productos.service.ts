import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { map } from 'rxjs/operators';
import { Producto } from '../../../modelos/productos/productosZigma.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productosCollection: AngularFirestoreCollection<Producto>;

  productos: Observable<Producto[]>;

  constructor(private afs: AngularFirestore) {
    this.productosCollection = afs.collection<Producto>('productos');
    this.productos = this.productosCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Producto;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  // tslint:disable-next-line:typedef
  listaProductos() {
    return this.productos;
  }

  // tslint:disable-next-line:typedef
  agregarProductos(producto: Producto) {
    this.productosCollection.add(producto);
  }


  // tslint:disable-next-line:typedef
 getProductosID(){
   this.productosCollection.get();
 }


}

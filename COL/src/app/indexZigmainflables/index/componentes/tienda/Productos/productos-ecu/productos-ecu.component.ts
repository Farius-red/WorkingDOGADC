import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/core/servicios/Zigmainflables/productos/modelos/productos/productosZigma.model';
import {Params } from '@angular/router';
// servicios
import { ProductosService } from '../../../../../../core/servicios/Zigmainflables/productos/productos.service';
import { ProductosZigmaSinFireBaseService } from '../../../../../../core/servicios/Zigmainflables/productos/productosZigmaSinFirebase/productos-zigma-sin-fire-base.service';


@Component({
  selector: 'app-productos-ecu',
  templateUrl: './productos-ecu.component.html',
  styleUrls: ['./productos-ecu.component.css'],
})
export class ProductosEcuComponent implements OnInit {


@Output() productoCliked: EventEmitter<any> = new EventEmitter();
  productos: Producto[];
  productosSinfireb: Producto[];

  constructor(
    private conexcionProductos: ProductosService,
    private productosSinConexion: ProductosZigmaSinFireBaseService
  ) {
    this.conexcionProductos.listaProductos().subscribe((producto) => {
      this.productos = producto;
      console.log(this.productos);


    });



  }

  ngOnInit(): void {


     this.productosSinfireb = this.productosSinConexion.getProductos();




  }

  // tslint:disable-next-line:typedef
  addCard(id: string){
    console.log('agrege al carrito');
    this.productoCliked.emit(this.productosSinConexion.getProductID(id));
  }

}

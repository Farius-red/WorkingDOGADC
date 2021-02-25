import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  productos: any;
  productosSinfireb: any;

  constructor(
    private conexcionProductos: ProductosService,
    private productosSinConexion: ProductosZigmaSinFireBaseService
  ) {
    this.conexcionProductos.listaProductos().subscribe((producto) => {
      this.productos = producto;
      console.log(this.productos);


    });

    this.productosSinConexion.getProductos();
    this.productosSinfireb = this.conexcionProductos;



  }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  addCard(){
    console.log('agrege al carrito');
    this.productoCliked.emit(this.productos);
  }

}

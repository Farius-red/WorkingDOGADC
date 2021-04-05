import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// modelos
import { Producto } from 'src/app/core/modelos/productos/productosZigma.model';


// servicios
import { ProductosService } from 'src/app/core/servicios/Zigmainflables/productos/productos.service';
import { ProductosZigmaSinFireBaseService } from 'src/app/core/servicios/Zigmainflables/productos/productosZigmaSinFirebase/productos-zigma-sin-fire-base.service';


@Component({
  selector: 'app-detalle-product-zigma',
  templateUrl: './detalle-product-zigma.component.html',
  styleUrls: ['./detalle-product-zigma.component.css']
})
export class DetalleProductZigmaComponent implements OnInit {
  productsinB: Producto;
  producto;


  constructor(
     private route: ActivatedRoute,
     private productosSinBase: ProductosZigmaSinFireBaseService,
     private product: ProductosService,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
        const id = params.id;
        this.productsinB = this.productosSinBase.getProductID(id);


        this.producto = this.product.listaProductos();

        this.fetchProduct(id);



    });
  }

      // tslint:disable-next-line:typedef
      fetchProduct(id: string){
          this.productsinB = this.productosSinBase.getProductID(id) ;

          console.log(this.productsinB);

      }
}

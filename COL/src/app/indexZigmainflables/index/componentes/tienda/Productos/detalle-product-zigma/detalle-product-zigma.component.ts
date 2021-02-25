import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/core/servicios/Zigmainflables/productos/modelos/productos/productosZigma.model';
import { ProductosZigmaSinFireBaseService } from 'src/app/core/servicios/Zigmainflables/productos/productosZigmaSinFirebase/productos-zigma-sin-fire-base.service';


@Component({
  selector: 'app-detalle-product-zigma',
  templateUrl: './detalle-product-zigma.component.html',
  styleUrls: ['./detalle-product-zigma.component.css']
})
export class DetalleProductZigmaComponent implements OnInit {
  productsinB: Producto;

  constructor(
     private route: ActivatedRoute,
     private productosSinBase: ProductosZigmaSinFireBaseService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
        const id = params.id;
        this.productsinB = this.productosSinBase.getProductID(id);
        console.log(this.productsinB);

    });
  }

}

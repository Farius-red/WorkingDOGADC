import { Component, OnInit } from '@angular/core';

//servicios
import { ProductosService } from '../../../../../../core/servicios/Zigmainflables/productos/productos.service';
import { ProductosZigmaSinFireBaseService } from '../../../../../../core/servicios/Zigmainflables/productos/productosZigmaSinFirebase/productos-zigma-sin-fire-base.service';



@Component({
  selector: 'app-productos-ecu',
  templateUrl: './productos-ecu.component.html',
  styleUrls: ['./productos-ecu.component.css']
})
export class ProductosEcuComponent implements OnInit {

 

  productos: any;
  productosSinfireb: any;

  constructor( 
    private conexcionProductos : ProductosService,
    private productosSinConexion : ProductosZigmaSinFireBaseService
    
    ) { 

    this.conexcionProductos.listaProductos().subscribe(producto => {
      this.productos = producto;
      console.log(this.productos);
   });
    
    this.productosSinConexion.listarProductos();
    console.log(productosSinConexion);
      
    

  }


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../../../../core/servicios/Zigmainflables/productos/productos.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productos: any;

  constructor( private conexcionProductos : ProductosService) { 

    this.conexcionProductos.listaProductos().subscribe(producto => {
      this.productos = producto;
      console.log(this.productos);
   });
    
  }

  ngOnInit(): void {
  }

}

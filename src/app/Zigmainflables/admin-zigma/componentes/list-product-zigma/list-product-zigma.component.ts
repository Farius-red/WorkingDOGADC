import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/core/servicios/Zigmainflables/productos/productos.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-product-zigma',
  templateUrl: './list-product-zigma.component.html',
  styleUrls: ['./list-product-zigma.component.css']
})
export class ListProductZigmaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombreProducto', 'Precio', 'ganacia'];
  dataSource = new MatTableDataSource();


  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {

     this.productosService.listaProductos().subscribe(res => console.log(res));
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

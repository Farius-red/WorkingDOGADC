import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  productoAdd(id: number){
    console.log('product');
    console.log(id);
  }
}

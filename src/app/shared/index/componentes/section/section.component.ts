import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  images: any = [
    {
      imagen: 'assets/images/cachorro rotwailer.jpg',
      descripcion:
        'Es importante tener en cuenta  la edad de nuestro cachorro para asi no presionar a nuestro canino y  obtener los mejores resultados . En su mayoría de casos es a partir de los 2 meses',
      titulo: '¿Que edad es ideal para un entrenamiento ? ',
    },
    {
      imagen: 'assets/images/adiestramientocanino3.jpg',
      descripcion:
        'Es importante conocer a que tipo de conducta pertenece su canino para eso ofrecemos la clase de valoración donde uno de nuestros entrenadores lo visitara',
      titulo: 'Conductas',
    },
    {
      imagen: 'assets/images/adiestramientocanino1.jpg',
      descripcion:
        'Para conocer que tipo de entrenamiento es necesario para su canino es importante Conocer que conductas hay que corregir y que curso se adapta al  dueño . Por lo cual creamos la clase de valoración a domicilio  .',
      titulo: 'Adiestramiento Canino',
    },
    {
      imagen: 'assets/images/adiestramientocanino2.jpg',
      descripcion:
        'La valoración es una sesion creada por nosotros con el fin de llegar a una negociación con el dueño ademas de mostrarle más nuestro trabajo y darle tips básicos para la mejora de conductas de su canino. Esta clase tiene una duración de 1 hora y puede ser tomada en la comodidad de su casa.',
      titulo: 'Clases De valoracion',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

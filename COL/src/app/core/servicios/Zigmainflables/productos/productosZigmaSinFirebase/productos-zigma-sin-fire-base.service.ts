
import { Injectable } from '@angular/core';
import { Categoria, Producto } from '../modelos/productos/productosZigma.model';



@Injectable({
  providedIn: 'root'
})
export class ProductosZigmaSinFireBaseService {

  categorias:Categoria[] = [

    {  id:1, nombreCategoria:'Recreativos' },
    {  id:2, nombreCategoria:'Publicitarios' },
    {  id:3, nombreCategoria:'Skydancers' },

  ]

  productosSinBase:Producto[] =[
  
  { 
    id: 10,  Descripcion: 'Inflable recreativo que cuenta con dos deslizaderos y en su parte de atras una zona de brinco ',   
     NombreProducto:'Barco inflable', color:'A definir por el cliente',   
   medidas:'9.50 mts fondo x  4.5 mts ancho x 7 mts de alto', precio:6300000,     imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/barcoInflable.jpg'
  },

  { 
    id: 11,  Descripcion:  'Es un inflable Publicitario excelente calidad diseño a comodidad del cliente',  
    NombreProducto:' Araña Publicitaria inflable',  color:'A definir por el cliente', 
   medidas:'a convenir con el cliente', precio:1800000,     imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/arañaInflable.jpg'
  },
  { 
    id: 12,  Descripcion:  'Cuenta con zona de brindo dos golpeadores y un mini tobogan',  
    NombreProducto:'Castillo Tobogan 4x4 ',
    color:'A definir por el cliente',  medidas:' 4mts fondo x 4mts Ancho ', precio:3500000,     imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/castilloInflable4x4Tobogan.jpg'
  },
  
  { 
    id: 13,  Descripcion:  'cuenta con doble tobogan y una zona de brinco muy atractivo para los niños', 
     NombreProducto:'Barco Pirata ', color:'A definir por el cliente',  medidas:'6 mts alto x 7 mts fondo x 5 mts ancho', 
     precio:5500000,   imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/barcoPirataInflableAmarillo.jpg'
  },
  { 
    id: 14,  Descripcion:  'castillo recreativo en forma de palmera muy llamativo para los niños',  
    NombreProducto:'Castillo palmeras', color:'A definir por cliente',
     medidas:'4 ancho x 4 fondo x 2.5 alto', precio: 33000000,     imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/castilloInflablePalmeras.jpg'
  },
  
  { 
    id: 15,  Descripcion:  'Inflable recreativo muy llamativo tipo castillo tobogan ', 
   NombreProducto:'Castillo Tobogan Inflable ',
    color:'A escoger ',  medidas:'5,3mts ancho   X 4,5fondo   X 4,0m alto ', precio:4700000,     imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/castilloTobogan.jpg'
  },
  { 
    id: 16,  Descripcion:  'Castillo recreativo con diseño de cocodrillo muy llamativo para los niños',  NombreProducto:'Castillo Cocodrillo',
    color:'A escoger ',  medidas:'4mts x 4mts x 2.5 mts alto ', precio:3300000,     imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/castilloCocodrillo.jpg'
  },
  
  { 
    id: 17,  Descripcion:  'un castillo para personas que buscan diversion para sus hijos  en casa ', 
     NombreProducto:'Mini castillos', color:' a escroger por el cliente',  medidas:'2 mts x 2mts ',
     precio:1800000,  imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/miniCastillo.jpg'
  },
  { 
    id: 18,  Descripcion:  'un oso tobogan infalble muy llamativo para los niños y personas cuenta con dos deslizadores ,zona de brinco',  
    NombreProducto:'Tobogan Oso', color:'A escoger',  medidas:'medidas 7mts alto x 4.5mts ancho x  6 fondo', 
    precio:5300000, imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/osoInflable.jpg'
  },
  
  { 
    id: 19,  Descripcion:  'un tobogan inflable con pscina de pelotas 4 deslizadores y un tunel muy llamativo para los niños ', 
     NombreProducto:'Tobogan Castillo Espiral ',
    color:'A definir por el cliente',  medidas:'6mts fondo x 4.5 mts ancho x 3.5 mts alto', precio:4800000,    imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/toboganCastillo6x4.5.jpg'
  },
  { 
    id: 20,  Descripcion:  'inflables publicitarios tipo dummies formas escogibles por el cliente ', 
     NombreProducto:'dummis publicitarios ', color:'A definir por el cliente', 
   medidas:'2 mts alto x diametro de forma', precio:1500000,  imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/inflablesPublicitarios.jpg'
  },
  
  { 
    id: 21,  Descripcion:  'Tobogan inflable para niños y niñas cuenta con deslizadores, zona de brinco', 
     NombreProducto:'Tobogan mixto ', color:'A definir por el cliente',  
    medidas:'4.5mts ancho x 4.5 alto x 5mts fondo ', precio:45000000, imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/ToboganInflable4.5ninosyninas.jpg'
  },
  { 
    id: 22,  Descripcion:  'un tobogan con entrada de cocodrillo dos deslizadores y zona de brinco ', 
     NombreProducto:'Tobogan cocodrillo', color:'A definir por el cliente', 
   medidas:'4.5mts ancho x 4mts alto x 6mts fondo', precio:4800000, imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/toboganCocodrillo.jpg'
  },
  
  { 
    id: 23,  Descripcion:  'botellas inflables Publicitarias estos inflables son totalmente a escoger por el cliente ',  
    NombreProducto:'Botellas Publicitarias Inflables', color:'A definir por el cliente',  
    medidas:'2mts alto x proporcion al diseño', precio:1500000, imagen:'COL/src/app/sharedZigmaInflables/img/productosInflables/inflablesPublicitarios.jpg'
  },


  ];

  constructor() {
  
   }
 listarProductos(){

  return this.productosSinBase;
 }

 listarCategorias(){
   return this.categorias;
 }
}

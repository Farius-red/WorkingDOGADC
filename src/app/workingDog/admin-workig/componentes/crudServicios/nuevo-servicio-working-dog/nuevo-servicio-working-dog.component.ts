import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nuevo-servicio-WorkingDog',
  templateUrl: './nuevo-servicio-working-dog.component.html',
  styleUrls: ['./nuevo-servicio-working-dog.component.css']
})
export class NuevoServicioWorkingDogComponent {
  addressForm = this.fb.group({
    dI: [null , Validators.required],
    nombre: [null, Validators.required],
    apellido: [null],
    direccion: [null, Validators.required],
    observaciones: null,
    ciudades: [null, Validators.required],
    servicio: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  servicios = [
    {nombre: 'Peluqueria', abbreviation: 'pelu'},
    {nombre: 'Clase Valoracion', abbreviation: 'AK'},
    {nombre: 'Adiestramiento', abbreviation: 'Adi'},
  ];

  ciudades = [
    {nombre: 'bogota'},
    {nombre: 'Quito'},
    {nombre: 'cuenca'},
  ];

  constructor(private fb: FormBuilder) {}

  // tslint:disable-next-line:typedef
  onSubmit() {
    alert('Thanks!');
  }
}

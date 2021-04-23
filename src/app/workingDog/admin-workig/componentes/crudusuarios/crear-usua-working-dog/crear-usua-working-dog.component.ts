import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'crear-usua-workingDog',
  templateUrl: './crear-usua-working-dog.component.html',
  styleUrls: ['./crear-usua-working-dog.component.css']
})
export class CrearUsuaWorkingDogComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    roles: ['cliente', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Ecuador', abbreviation: 'ecu'},
    {name: 'Colombia', abbreviation: 'col'},
  ];

  constructor(private fb: FormBuilder) {}

  // tslint:disable-next-line:typedef
  onSubmit() {
    alert('Thanks!');
  }
}

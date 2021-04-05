import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaIndexWorkingDogAdcComponent } from './plantilla-index-working-dog-adc.component';

describe('PlantillaIndexWorkingDogAdcComponent', () => {
  let component: PlantillaIndexWorkingDogAdcComponent;
  let fixture: ComponentFixture<PlantillaIndexWorkingDogAdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaIndexWorkingDogAdcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaIndexWorkingDogAdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

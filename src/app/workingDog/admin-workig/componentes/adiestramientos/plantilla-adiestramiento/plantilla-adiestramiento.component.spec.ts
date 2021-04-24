import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaAdiestramientoComponent } from './plantilla-adiestramiento.component';

describe('PlantillaAdiestramientoComponent', () => {
  let component: PlantillaAdiestramientoComponent;
  let fixture: ComponentFixture<PlantillaAdiestramientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaAdiestramientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaAdiestramientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

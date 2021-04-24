import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaModulosZigmaComponent } from './plantilla-modulos-zigma.component';

describe('PlantillaModulosZigmaComponent', () => {
  let component: PlantillaModulosZigmaComponent;
  let fixture: ComponentFixture<PlantillaModulosZigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaModulosZigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaModulosZigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

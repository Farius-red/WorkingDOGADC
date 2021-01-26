import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillAdmiComponent } from './plantill-admi.component';

describe('PlantillAdmiComponent', () => {
  let component: PlantillAdmiComponent;
  let fixture: ComponentFixture<PlantillAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

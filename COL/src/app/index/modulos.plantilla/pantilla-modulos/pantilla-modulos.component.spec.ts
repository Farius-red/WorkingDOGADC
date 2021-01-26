import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantillaModulosComponent } from './pantilla-modulos.component';

describe('PantillaModulosComponent', () => {
  let component: PantillaModulosComponent;
  let fixture: ComponentFixture<PantillaModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantillaModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantillaModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

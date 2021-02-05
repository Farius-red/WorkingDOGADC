import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioZigmaComponent } from './inicio.zigma.component';

describe('InicioZigmaComponent', () => {
  let component: InicioZigmaComponent;
  let fixture: ComponentFixture<InicioZigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioZigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioZigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

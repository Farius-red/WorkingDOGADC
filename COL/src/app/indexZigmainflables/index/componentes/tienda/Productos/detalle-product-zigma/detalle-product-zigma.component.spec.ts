import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProductZigmaComponent } from './detalle-product-zigma.component';

describe('DetalleProductZigmaComponent', () => {
  let component: DetalleProductZigmaComponent;
  let fixture: ComponentFixture<DetalleProductZigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleProductZigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleProductZigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

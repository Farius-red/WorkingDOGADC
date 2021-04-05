import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosEcuComponent } from './productos-ecu.component';

describe('ProductosEcuComponent', () => {
  let component: ProductosEcuComponent;
  let fixture: ComponentFixture<ProductosEcuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosEcuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosEcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

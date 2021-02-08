import { TestBed } from '@angular/core/testing';

import { ProductosZigmaSinFireBaseService } from './productos-zigma-sin-fire-base.service';

describe('ProductosZigmaSinFireBaseService', () => {
  let service: ProductosZigmaSinFireBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosZigmaSinFireBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ProductosWorkingDOGService } from './productos-working-dog.service';

describe('ProductosWorkingDOGService', () => {
  let service: ProductosWorkingDOGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosWorkingDOGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

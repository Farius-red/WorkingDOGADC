import { TestBed } from '@angular/core/testing';

import { UsuariosServiceWorkingdog } from './usuarios.Workingdo.service';

describe('UsuariosService', () => {
  let service: UsuariosServiceWorkingdog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosServiceWorkingdog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

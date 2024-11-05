import { TestBed } from '@angular/core/testing';

import { DatosusuarioService } from './datosusuario.service';

describe('DatosusuarioService', () => {
  let service: DatosusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

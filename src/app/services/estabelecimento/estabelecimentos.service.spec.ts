import { TestBed } from '@angular/core/testing';

import { EstabelecimentosService } from './estabelecimentos.service';

describe('EstabelecimentosService', () => {
  let service: EstabelecimentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstabelecimentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

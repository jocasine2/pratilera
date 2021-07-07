import { TestBed } from '@angular/core/testing';

import { ProdutosEstabelecimentoService } from './produtos-estabelecimento.service';

describe('ProdutosEstabelecimentoService', () => {
  let service: ProdutosEstabelecimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosEstabelecimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

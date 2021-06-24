import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdutoDetalheProdutoComponent } from './card-produto-detalhe-produto.component';

describe('CardProdutoDetalheProdutoComponent', () => {
  let component: CardProdutoDetalheProdutoComponent;
  let fixture: ComponentFixture<CardProdutoDetalheProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProdutoDetalheProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProdutoDetalheProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

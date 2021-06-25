import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEstabelecimentoComponent } from './card-estabelecimento.component';

describe('CardEstabelecimentoComponent', () => {
  let component: CardEstabelecimentoComponent;
  let fixture: ComponentFixture<CardEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEstabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

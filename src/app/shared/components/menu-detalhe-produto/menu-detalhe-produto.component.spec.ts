import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetalheProdutoComponent } from './menu-detalhe-produto.component';

describe('MenuDetalheProdutoComponent', () => {
  let component: MenuDetalheProdutoComponent;
  let fixture: ComponentFixture<MenuDetalheProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDetalheProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDetalheProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

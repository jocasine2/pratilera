import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselPromoComponent } from './carrosel-promo.component';

describe('CarroselPromoComponent', () => {
  let component: CarroselPromoComponent;
  let fixture: ComponentFixture<CarroselPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroselPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroselPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

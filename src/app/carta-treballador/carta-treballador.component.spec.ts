import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaTreballadorComponent } from './carta-treballador.component';

describe('CartaTreballadorComponent', () => {
  let component: CartaTreballadorComponent;
  let fixture: ComponentFixture<CartaTreballadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaTreballadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaTreballadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

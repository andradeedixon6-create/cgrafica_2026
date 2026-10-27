import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bizquierda } from './bizquierda';

describe('Bizquierda', () => {
  let component: Bizquierda;
  let fixture: ComponentFixture<Bizquierda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bizquierda],
    }).compileComponents();

    fixture = TestBed.createComponent(Bizquierda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

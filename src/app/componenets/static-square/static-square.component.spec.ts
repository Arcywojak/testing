import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSquareComponent } from './static-square.component';

describe('StaticSquareComponent', () => {
  let component: StaticSquareComponent;
  let fixture: ComponentFixture<StaticSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

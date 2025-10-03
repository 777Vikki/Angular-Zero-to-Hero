import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCustomValidation } from './reactive-form-custom-validation';

describe('ReactiveFormCustomValidation', () => {
  let component: ReactiveFormCustomValidation;
  let fixture: ComponentFixture<ReactiveFormCustomValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormCustomValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormCustomValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

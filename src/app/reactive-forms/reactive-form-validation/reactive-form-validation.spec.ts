import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValidation } from './reactive-form-validation';

describe('ReactiveFormValidation', () => {
  let component: ReactiveFormValidation;
  let fixture: ComponentFixture<ReactiveFormValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormArray } from './reactive-form-array';

describe('ReactiveFormArray', () => {
  let component: ReactiveFormArray;
  let fixture: ComponentFixture<ReactiveFormArray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormArray]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormArray);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

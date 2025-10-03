import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSingleControl } from './reactive-form-single-control';

describe('ReactiveFormSingleControl', () => {
  let component: ReactiveFormSingleControl;
  let fixture: ComponentFixture<ReactiveFormSingleControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormSingleControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormSingleControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

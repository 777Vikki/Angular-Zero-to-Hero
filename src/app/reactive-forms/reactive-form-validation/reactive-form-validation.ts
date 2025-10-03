import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-validation.html',
  styleUrl: './reactive-form-validation.scss'
})
export class ReactiveFormValidation {
  formBuilder = inject(FormBuilder);
  myForm = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.email]]
  });

  onSubmit() {
    console.log(this.myForm);
    console.log(this.myForm.controls['userName'].errors);
    console.log(this.myForm.get('userName')?.errors)
  }
}

import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss'
})
export class ReactiveForm {
  private formBuilder = inject(FormBuilder);
  myForm: FormGroup = this.formBuilder.group({
    name: [''],
    email: [''],
    phoneNumber: ['']
  });

  onSubmit() {
    console.log(this.myForm.value);
  }
}

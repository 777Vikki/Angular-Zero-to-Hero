import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn, AbstractControl, FormArray } from '@angular/forms';

const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (!password || !confirmPassword) return null;

  return password.value === confirmPassword.value ? null : { passwordMisMatch: true };
}

export const noSpaceValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  if (typeof value === 'string' && value.trim() !== value) {
    return { spaceError: true }; // error key for space issue
  }
  return null;
};

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private formBuilder = inject(FormBuilder);

  signUpForm = this.createSignUpForm();

  private createSignUpForm(): FormGroup {
    const signUpFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      companies: this.formBuilder.array([this.createCompanyForm()]),
      phoneNumbers: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12), noSpaceValidator]],
        confirmPassword: ['', [Validators.required]],
      }, { validators: passwordMatchValidator })
    });
    return signUpFormGroup;
  }

  get companies(): FormArray {
    return this.signUpForm.get('companies') as FormArray;
  }

  get phoneNumbers(): FormArray {
    return this.signUpForm.get('phoneNumbers') as FormArray;
  }

  private createCompanyForm(): FormGroup {
    return this.formBuilder.group({
      companyName: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  addCompany() {
    this.companies.push(this.createCompanyForm());
  }

  deleteCompany(index: number) {
    this.companies.removeAt(index);
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.formBuilder.control('', Validators.required));
  }

  deletePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  onNameInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const formatted = this.capitalizeWords(input.value);
    input.value = formatted;
    this.signUpForm.get('name')?.setValue(formatted, { emitEvent: false });
  }

  private capitalizeWords(value: string): string {
    return value.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  }

  onSubmit() {
    console.log(this.signUpForm);
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
  }
}

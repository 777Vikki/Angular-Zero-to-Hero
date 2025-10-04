import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-custom-validation',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-custom-validation.html',
  styleUrl: './reactive-form-custom-validation.scss'
})
export class ReactiveFormCustomValidation {
  formBuilder = inject(FormBuilder);

  myForm: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required, this.noSpaceValidator()]],
    password: ['', [Validators.required, this.passwordStrengthValidator()]],
  },
    { validators: this.formErrorValidator() }
  );

  noSpaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasSpace = (control.value || '').includes(' ');
      return hasSpace ? { noSpace: true } : null;
    };
  }

  passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';

      // Must contain letters, numbers, and at least one special character
      const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

      return pattern.test(value) ? null : { passwordStrength: true };
    };
  }

  formErrorValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const userName = group.get('userName')?.value || '';
      const password = group.get('password')?.value || '';

      if (!userName || !password) {
        return { formInvalid: 'Please fill all fields.' };
      }

      if (userName.includes(' ')) {
        return { formInvalid: 'Username should not contain spaces.' };
      }

      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).+$/;
      if (!passwordPattern.test(password)) {
        return { formInvalid: 'Password must be alphanumeric with a special character.' };
      }
      return null;
    };
  }

  onSubmit() {
    console.log(this.myForm);
  }
}

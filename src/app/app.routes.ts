import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'reactive-form-single-control', loadComponent: () => import('./reactive-forms/reactive-form-single-control/reactive-form-single-control').then(m => m.ReactiveFormSingleControl) },
    { path: 'reactive-form', loadComponent: () => import('./reactive-forms/reactive-form/reactive-form').then(m => m.ReactiveForm) },
    { path: 'reactive-form=validation', loadComponent: () => import('./reactive-forms/reactive-form-validation/reactive-form-validation').then(m => m.ReactiveFormValidation) },
    
];

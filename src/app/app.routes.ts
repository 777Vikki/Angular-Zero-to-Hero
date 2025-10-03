import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'reactive-form-single-control', loadComponent: () => import('./reactive-forms/reactive-form-single-control/reactive-form-single-control').then(m => m.ReactiveFormSingleControl) },

];

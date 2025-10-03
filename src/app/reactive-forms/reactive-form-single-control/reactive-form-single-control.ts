import { Component, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-reactive-form-single-control',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-single-control.html',
  styleUrl: './reactive-form-single-control.scss'
})
export class ReactiveFormSingleControl implements OnInit {
  search = new FormControl('');
  text = signal<string>('');

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.text.set(value ?? '');
    });
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckbox } from '@angular/material/checkbox';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatFormField,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    MatCardContent,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardActions,
    MatCheckbox,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';

  form: FormGroup;
  showSuccess = false;
  showError = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
      date: ['', Validators.required],
      location: this.fb.array([
        this.createLocationGroup(), // index 0 - "Von"
        this.createLocationGroup(), // index 1 - "Zu"
      ]),
      amount: ['', Validators.required],
      packaging: [true],
    });
  }

  createLocationGroup(): FormGroup {
    return this.fb.group({
      plz: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
    });
  }

  get location(): FormArray {
    return this.form.get('location') as FormArray;
  }

  onSubmit(): void {
    const formValue = this.form.value;
    const payload = {
      person: {
        vorname: formValue.vorname,
        nachname: formValue.nachname,
      },
      date: formValue.date,
      location: formValue.location,
      amount: formValue.amount,
      additional_info: {
        packaging: formValue.packaging,
      },
    };

    this.http.post('http://localhost:8080/umzug', payload).subscribe({
      next: () => {
        this.showSuccess = true;
        this.showError = false;
        this.form.reset();
      },
      error: () => {
        this.showError = true;
        this.showSuccess = false;
      },
    });

    console.log(payload);
  }
}

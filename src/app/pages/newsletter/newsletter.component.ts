import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
})
export class NewsletterComponent implements OnInit {
  form!: FormGroup;
  message: string = '';
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          // Validators.pattern('/^[^s@]+@[^s@]+.[^s@]+$/'),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Simulez l'envoi de l'e-mail (remplacez par un appel API réel)
      console.log('Email submitted:', this.form.value);
      this.message = 'Thank you for subscribing to the newsletter!';
      this.form.patchValue({ email: '' }); // Réinitialise le champ e-mail
    } else {
      console.log(this.form.value);

      this.message = 'Please enter a valid email address.';
    }
  }
}

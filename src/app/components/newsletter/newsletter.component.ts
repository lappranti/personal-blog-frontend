import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TitleComponent } from '../title/title.component';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../shared/services/api/api.service';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TitleComponent, MatIconModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
})
export class NewsletterComponent implements OnInit {
  form!: FormGroup;
  message: string = '';
  formValid!: boolean;
  isLoading: boolean = false;
  constructor(private fb: FormBuilder, private apiService: ApiService) {}
  ngOnInit(): void {
    console.log('newsletter');

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
      // this.formValid = true;
      // Simulez l'envoi de l'e-mail (remplacez par un appel API réel)
      // console.log('Email submitted:', this.form.value);
      this.isLoading = true;
      this.apiService
        .newsletterSubscribe(this.form.value)
        .pipe()
        .subscribe({
          next: (resp: any) => {
            this.form.patchValue({ email: '' }); // Réinitialise le champ e-mail
            this.isLoading = false;
            this.message = resp.message;
            this.formValid = true;
          },
          error: (err) => {
            this.isLoading = false;
            this.message = `Cet email est déjà abonné`;
            this.formValid = false;
            // console.error('Erreur lors du chargement des articles :', err);
          },
        });
      // this.form.value.email.patchValue('');
    } else {
      this.message = 'Please enter a valid email address.';
      this.formValid = false;
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
})
export class SocialLinksComponent {
  socialLinks = [
    {
      icon: './images/LinkedIn.svg',
      url: 'https://www.linkedin.com/in/sarre-ndeury-02054214a/',
    },
    {
      icon: './images/github.svg',
      url: 'https://github.com/lappranti',
    },
  ];
}

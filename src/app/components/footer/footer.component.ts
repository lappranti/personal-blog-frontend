import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent, RouterModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Blog', path: '/articles' },
    { name: 'About', path: '/about' },
    { name: 'Newsletter', path: '/newsletter' },
  ];
  currentTheme: string = '';
  currentYear: number = new Date().getFullYear();
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { ThemeService } from '../../shared/services/theme/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentTheme: string = '';
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}

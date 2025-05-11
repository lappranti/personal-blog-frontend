import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { ThemeService } from '../../shared/services/theme/theme.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, SocialLinksComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  currentTheme: string = '';
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}

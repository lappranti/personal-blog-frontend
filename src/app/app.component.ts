import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgressBarService } from './shared/services/progress-bar/progress-bar.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MatProgressBarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  currentTheme: string = '';
  showProgressBar = false;
  title = 'frontend';

  constructor(
    private progressBarService: ProgressBarService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
      this.applySavedTheme();
    });
  }

  applySavedTheme(): void {
    document.documentElement.classList.toggle(
      'dark',
      this.currentTheme === 'dark'
    );
  }
}

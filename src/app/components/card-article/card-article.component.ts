import { Component, Input } from '@angular/core';
import { Article } from '../../shared/models/article';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './card-article.component.html',
  styleUrl: './card-article.component.scss',
})
export class CardArticleComponent {
  @Input() article!: Article;

  currentTheme: string = '';
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
    });
  }
}

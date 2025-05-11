import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { Article } from '../../shared/models/article';
import { ApiService } from '../../shared/services/api/api.service';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { CardArticleComponent } from '../../components/card-article/card-article.component';
import { ThemeService } from '../../shared/services/theme/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SocialLinksComponent,
    SkeletonLoaderComponent,
    CardArticleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];
  isLoading: boolean = true;
  currentTheme: string = '';

  constructor(
    private apiService: ApiService,
    private themeService: ThemeService
  ) {}
  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
    });
    this.getLastestArticles();
  }

  getLastestArticles() {
    this.apiService.getLatestArticles().subscribe((res) => {
      this.articles = res;
      this.isLoading = false;
    });
  }
}

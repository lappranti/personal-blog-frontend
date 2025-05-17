import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { Article } from '../../shared/models/article';
import { ApiService } from '../../shared/services/api/api.service';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { CardArticleComponent } from '../../components/card-article/card-article.component';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { NumbersComponent } from '../../components/numbers/numbers.component';
import { TechnosComponent } from '../../components/technos/technos.component';
import { TitleComponent } from '../../components/title/title.component';
import { AppService } from '../../shared/services/app-service/app-service.service';
import { AppContext } from '../../shared/enum/app-context/app-context';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SocialLinksComponent,
    SkeletonLoaderComponent,
    CardArticleComponent,
    NewsletterComponent,
    NumbersComponent,
    TechnosComponent,
    TitleComponent,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  isLoading: boolean = true;
  currentTheme: string = '';

  constructor(
    private apiService: ApiService,
    private themeService: ThemeService,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.setContext(AppContext.Home);
    this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
    });
    this.getLastestArticles();
  }

  ngOnDestroy(): void {
    this.appService.setContext(AppContext.Default);
  }

  getLastestArticles() {
    this.apiService.getLatestArticles().subscribe((res) => {
      this.articles = res;
      this.isLoading = false;
    });
  }
}

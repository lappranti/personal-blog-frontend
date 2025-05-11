import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Article } from '../../shared/models/article';
import { ApiService } from '../../shared/services/api/api.service';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { CardArticleComponent } from '../../components/card-article/card-article.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { ThemeService } from '../../shared/services/theme/theme.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SkeletonLoaderComponent,
    CardArticleComponent,
    PaginationComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  articles: Article[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  isLoading: boolean = true; // Indique si les données sont en cours de chargement
  currentTheme: string = '';

  constructor(
    private apiService: ApiService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
    });
    this.loadArticles(this.currentPage);
  }

  loadArticles(page: number): void {
    this.apiService.getAllPosts(page, 10).subscribe((response) => {
      this.articles = response.articles;
      this.currentPage = response.currentPage;
      this.totalPages = response.totalPages;
      this.isLoading = false;
      //console.log(this.totalPages);
    });
  }

  onPageChange(newPage: number): void {
    this.loadArticles(newPage);
  }
}

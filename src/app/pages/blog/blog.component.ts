import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Article } from '../../shared/models/article';
import { ApiService } from '../../shared/services/api/api.service';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { CardArticleComponent } from '../../components/card-article/card-article.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { TitleComponent } from '../../components/title/title.component';
import { NumbersComponent } from '../../components/numbers/numbers.component';
import { TechnosComponent } from '../../components/technos/technos.component';
import { AppService } from '../../shared/services/app-service/app-service.service';
import { AppContext } from '../../shared/enum/app-context/app-context';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LoadingSpinnerComponent,
    CardArticleComponent,
    PaginationComponent,
    TitleComponent,
    NumbersComponent,
    TechnosComponent,
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
  searchQuery: string = '';
  selectedCategory: string | null = null;
  originalArticles: Article[] = []; // Pour stocker les articles non filtrés

  constructor(
    private apiService: ApiService,
    private themeService: ThemeService,
    private appService: AppService
  ) {
    // Initialisation des services
  }

  ngOnInit(): void {
    this.appService.setContext(AppContext.Default);
    this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
    });
    this.loadArticles(this.currentPage);
  }

  // Méthode pour filtrer les articles
  getFilteredArticles(): Article[] {
    let filtered = [...this.originalArticles];

    // Filtrer par catégorie
    if (this.selectedCategory) {
      filtered = filtered.filter(article => article.categorie === this.selectedCategory);
    }

    // Filtrer par recherche
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query) ||
        article.categorie.toLowerCase().includes(query)
      );
    }

    return filtered;
  }

  // Méthode appelée quand la catégorie est sélectionnée
  onCategorySelect(category: string | null): void {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.loadArticles(1);
  }

  // Méthode appelée quand la recherche change
  onSearchChange(): void {
    this.currentPage = 1;
    this.loadArticles(1);
  }

  // Méthode appelée quand la page change
  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.loadArticles(newPage);
  }

  // Méthode pour charger les articles
  loadArticles(page: number): void {
    this.isLoading = true;
    this.apiService.getAllPosts(page, 10).subscribe({
      next: (response) => {
        if (response) {
          this.totalPages = response.totalPages;
          this.originalArticles = [...response.articles];
          this.articles = this.getFilteredArticles();
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des articles:', error);
        this.isLoading = false;
      }
    });
  }

}

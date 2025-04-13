import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Article } from '../../shared/models/article';
import { ApiService } from '../../shared/services/api/api.service';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, SkeletonLoaderComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  articles: Article[] = [];
  isLoading: boolean = true; // Indique si les données sont en cours de chargement

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllPosts().subscribe((res) => {
      this.articles = res;
      this.isLoading = false; // Les données sont chargées
    });
  }
}

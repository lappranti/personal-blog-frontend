import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/services/api/api.service';
import { Article } from '../../shared/models/article';
import { CommonModule } from '@angular/common';
import { marked } from 'marked';
import Prism from 'prismjs';
import { TitleComponent } from '../../components/title/title.component';
import { SkeletonLoaderComponent } from '../../components/skeleton-loader/skeleton-loader.component';
import { CardArticleComponent } from '../../components/card-article/card-article.component';
import { AppService } from '../../shared/services/app-service/app-service.service';
import { AppContext } from '../../shared/enum/app-context/app-context';
// import 'prismjs/components/prism-dart';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-css';
// import 'prismjs/components/prism-html';

@Component({
  selector: 'app-detail-blog',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    SkeletonLoaderComponent,
    CardArticleComponent,
  ],
  templateUrl: './detail-blog.component.html',
  styleUrl: './detail-blog.component.scss',
})
export class DetailBlogComponent implements OnInit {
  slug: string = '';
  article!: Article;
  others: Article[] = [];
  isLoading: boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private appService: AppService
  ) {
    activatedRoute.params.subscribe((route) => {
      this.slug = route['slug'];
      if (this.slug) {
        this.getArticle();
        this.loadOthersArticles();
      }
    });
  }
  ngOnInit(): void {
    this.appService.setContext(AppContext.Default);
  }

  getArticle() {
    this.apiService.getOnePost(this.slug).subscribe(async (res) => {
      this.article = res as Article;
      console.log(this.article);

      const parsedMarkdown = await Promise.resolve(
        marked.parse(this.article.content)
      );
      this.article.content = parsedMarkdown;
      // Prism.highlightAll();

      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
    });
  }

  loadOthersArticles() {
    this.apiService.getAllPosts(1, 4).subscribe({
      next: (resp) => {
        this.others = resp.articles as Article[];
        this.others = this.others.filter((item) => item.slug !== this.slug);
        this.isLoading = false;
        // console.log('Articles chargés avec succès :', this.others);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des articles :', err);
        // Ajouter une logique pour afficher un message d'erreur à l'utilisateur
      },
    });
  }
}

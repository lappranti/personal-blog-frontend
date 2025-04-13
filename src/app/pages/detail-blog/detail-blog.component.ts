import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/services/api/api.service';
import { Article } from '../../shared/models/article';
import { CommonModule } from '@angular/common';
import { marked } from 'marked';
// import * as Prism from 'prismjs';
import Prism from 'prismjs';
import 'prismjs/components/prism-dart';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
// import 'prismjs/components/prism-html';

@Component({
  selector: 'app-detail-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-blog.component.html',
  styleUrl: './detail-blog.component.scss',
})
export class DetailBlogComponent implements AfterViewInit {
  slug: string = '';
  article!: Article;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    activatedRoute.params.subscribe((route) => {
      this.slug = route['slug'];
      // console.log(this.slug);
      if (this.slug) {
        this.getArticle();
      }
    });
  }

  getArticle() {
    this.apiService.getOnePost(this.slug).subscribe(async (res) => {
      this.article = res as Article;

      const parsedMarkdown = await Promise.resolve(
        marked.parse(this.article.content)
      );
      this.article.content = parsedMarkdown;
      // Prism.highlightAll();
      // console.log(this.article);
    });
  }

  ngAfterViewInit() {
    console.log(Prism);

    // Prism.highlightAll(); // Applique la coloration syntaxique
  }
}

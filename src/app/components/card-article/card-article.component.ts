import { Component, Input } from '@angular/core';
import { Article } from '../../shared/models/article';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-article.component.html',
  styleUrl: './card-article.component.scss',
})
export class CardArticleComponent {
  @Input() article!: Article;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Clipboard } from '@angular/cdk/clipboard';

interface Tip {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  codeExample?: string;
  date: Date;
  isFavorite: boolean;
}

@Component({
  selector: 'app-tricks-and-tips',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './tricks-and-tips.component.html',
  styleUrls: ['./tricks-and-tips.component.scss'],
})
export class TricksAndTipsComponent {
  tips: Tip[] = [
    {
      id: 1,
      title: 'Optimisation des performances Angular',
      description:
        'Découvrez les meilleures pratiques pour optimiser la performance de vos applications Angular',
      category: 'Performance',
      tags: ['angular', 'performance', 'optimization'],
      codeExample: '// Exemple de code ici',
      date: new Date('2025-05-17'),
      isFavorite: false,
    },
    {
      id: 2,
      title: 'Gestion des erreurs en TypeScript',
      description:
        'Apprenez à gérer les erreurs de manière efficace avec TypeScript',
      category: 'TypeScript',
      tags: ['typescript', 'error', 'handling'],
      codeExample:
        'try {\n  // code ici\n} catch (error) {\n  console.error(error);\n}',
      date: new Date('2025-05-16'),
      isFavorite: false,
    },
  ];

  searchQuery = '';
  selectedCategory: string | null = null;
  isLoading = false;
  private clipboard: Clipboard;

  constructor(clipboard: Clipboard) {
    this.clipboard = clipboard;
  }

  getUniqueCategories(): string[] {
    return [...new Set(this.tips.map((tip) => tip.category))];
  }

  filterByCategory(category: string): void {
    this.selectedCategory =
      category === this.selectedCategory ? null : category;
  }

  toggleFavorite(tip: Tip): void {
    tip.isFavorite = !tip.isFavorite;
  }

  copyCode(code: string): void {
    this.clipboard.copy(code);
    this.showNotification('Code copié !');
  }

  showNotification(message: string): void {
    // À implémenter avec un service de notifications
    console.log(message);
  }

  getFilteredTips(): Tip[] {
    return this.tips.filter((tip) => {
      const matchesSearch =
        tip.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        tip.description
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase()) ||
        tip.tags.some((tag) =>
          tag.toLowerCase().includes(this.searchQuery.toLowerCase())
        );

      const matchesCategory =
        !this.selectedCategory ||
        tip.category.toLowerCase() === this.selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }
}

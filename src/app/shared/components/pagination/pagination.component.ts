import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Input() currentPage: number = 1; // Page courante
  @Input() totalPages: number = 1; // Nombre total de pages
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  // Change la page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }

  // Vérifie si le bouton est désactivé
  isDisabled(direction: 'prev' | 'next'): boolean {
    return (
      (direction === 'prev' && this.currentPage === 1) ||
      (direction === 'next' && this.currentPage === this.totalPages)
    );
  }
}

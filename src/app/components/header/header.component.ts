import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ThemeService } from '../../shared/services/theme/theme.service';
import { ApplyContextClassDirective } from '../../shared/directives/apply-context-class/apply-context-class.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    ApplyContextClassDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('menuAnimation', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(-10px)',
          // display: 'none',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)',
          // display: 'block',
        })
      ),
      transition('hidden <=> visible', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  menuMobile: boolean = false;
  addBorderBot: boolean = false;
  private lastScrollTop: number = 0;
  private headerHeight: number = 80;
  isVisible: string = '';

  navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Blog', path: '/articles' },
    { name: 'UI', path: '/ui' },
    { name: 'Tricks & Tips', path: '/tricks-and-tips' },
  ];

  currentTheme: string = '';
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(this.currentTheme);
  }

  toggleMenuMobile() {
    this.menuMobile = !this.menuMobile;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Gestion de l'animation de défilement
    if (currentScroll > this.headerHeight) {
      // Effet de cache/affiche selon le sens du défilement
      if (currentScroll > this.lastScrollTop) {
        // Scroll vers le bas, cacher le header
        this.isVisible = 'hidden';
      } else {
        // Scroll vers le haut, afficher le header
        this.isVisible = 'show';
      }
    } else {
      // En haut de la page, header visible
      this.isVisible = '';
    }

    // Mise à jour de la position précédente
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}

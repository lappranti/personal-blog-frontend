import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
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
export class HeaderComponent {
  menuMobile: boolean = false;
  navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Newsletter', path: '/newsletter' },
  ];

  toggleMenuMobile() {
    this.menuMobile = !this.menuMobile;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-technos',
  standalone: true,
  imports: [CommonModule, TitleComponent, CarouselModule],
  templateUrl: './technos.component.html',
  styleUrl: './technos.component.scss',
})
export class TechnosComponent {
  techno = [
    {
      id: '1',
      src: '../images/tailwindcss.svg',
      alt: 'Tailwind CSS',
      title: 'Tailwind CSS',
    },
    {
      id: '2',
      src: '../images/Vitejs-logo.png',
      alt: 'Vite.js',
      title: 'Vite.js',
    },
    {
      id: '3',
      src: '../images/ts-logo.png',
      alt: 'TypeScript',
      title: 'TypeScript',
    },
    {
      id: '4',
      src: '../images/HTML5_logo.svg',
      alt: 'HTML5',
      title: 'HTML5',
    },
    {
      id: '6',
      src: '../images/JavaScript_logo.png',
      alt: 'JavaScript',
      title: 'JavaScript',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: false, // Masque les boutons de navigation
    autoplay: true, // Active le scroll automatique
    autoplayTimeout: 3000, // Change toutes les 3 secondes
    autoplayHoverPause: true, // Pause quand on passe la souris
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      }
    }
  };
}

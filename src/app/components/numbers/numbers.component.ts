import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.scss',
})
export class NumbersComponent implements AfterViewInit {
  @ViewChild('numbersContainer') numbersContainer!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const options = { duration: 2, delay: 0.5 }; // Durée de 2 secondes avec un délai

            new CountUp('counter-1', 7, options).start();
            new CountUp('counter-2', 0, options).start();
            new CountUp('counter-3', 0, options).start();

            // Désactive l'observateur après la première animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Active l'animation quand 50% de l'élément est visible
    );

    observer.observe(this.numbersContainer.nativeElement);
  }
}

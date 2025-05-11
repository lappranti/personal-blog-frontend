import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'articles',
    loadComponent: () =>
      import('./pages/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'articles/:slug',
    loadComponent: () =>
      import('./pages/detail-blog/detail-blog.component').then(
        (m) => m.DetailBlogComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'newsletter',
    loadComponent: () =>
      import('./pages/newsletter/newsletter.component').then(
        (m) => m.NewsletterComponent
      ),
  },
  {
    path: '**', // Route générique pour gérer les chemins non définis
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];

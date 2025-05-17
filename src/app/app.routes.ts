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
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  // {
  //   path: 'tricks',
  //   loadComponent: () =>
  //     import('./pages/tricks/tricks.component').then((m) => m.TricksComponent),
  // },
  {
    path: 'ui',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./components/project-detail/project-detail.component').then(
        (m) => m.ProjectDetailComponent
      ),
  },
  {
    path: 'tricks-and-tips',
    loadComponent: () =>
      import('./pages/tricks-and-tips/tricks-and-tips.component').then(
        (m) => m.TricksAndTipsComponent
      ),
  },
  // {
  //   path: 'tips',
  //   loadComponent: () =>
  //     import('./pages/tips/tips.component').then((m) => m.TipsComponent),
  // },
  {
    path: 'tricks/:slug',
    loadComponent: () =>
      import('./pages/detail-trick/detail-trick.component').then(
        (m) => m.DetailTrickComponent
      ),
  },
  {
    path: 'tips/:slug',
    loadComponent: () =>
      import('./pages/tips/tips.component').then((m) => m.TipsComponent),
  },
  {
    path: '**', // Route générique pour gérer les chemins non définis
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];

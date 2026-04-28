import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about').then((module) => module.About),
  },
     {
    path: 'home',
    loadComponent: () =>
      import('./features/films/pages/home/home').then((module) => module.Home),
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

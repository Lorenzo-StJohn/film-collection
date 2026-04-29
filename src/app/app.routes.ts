import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about').then((module) => module.About),
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/films/pages/home/home').then((module) => module.Home),
      },
      {
        path: ':filmId',
        loadComponent: () =>
          import('./features/films/pages/film/film').then(
            (module) => module.Film,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

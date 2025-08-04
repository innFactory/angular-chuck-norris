import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('../pages/home/home').then((m) => m.Home),
  },
  {
    path: 'favourites',
    loadComponent: () => import('../pages/favourites/favourites').then((m) => m.Favourites),
  },
  {
    path: 'cats',
    loadComponent: () => import('../pages/cats/cats').then((m) => m.Cats),
  },
];

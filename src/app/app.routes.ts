import { Routes } from '@angular/router';
import { Favourites } from '../pages/favourites/favourites';
import { HomePage } from '../pages/home/home-page';
import { Jokes } from '../pages/jokes/jokes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'jokes',
    component: Jokes,
  },
  {
    path: 'favourites',
    component: Favourites,
  },
];

import { Routes } from '@angular/router';
import { Cats } from '../pages/cats/cats';
import { Favourites } from '../pages/favourites/favourites';
import { Home } from '../pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'favourites',
    component: Favourites,
  },
  {
    path: 'cats',
    component: Cats,
  },
];

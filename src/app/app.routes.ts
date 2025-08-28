import { Routes } from '@angular/router';
import { FavouritesPage } from '../pages/favourites-page/favourites-page';
import { HomePage } from '../pages/home-page/home-page';
import { JokesPage } from '../pages/jokes-page/jokes-page';

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
    component: JokesPage,
  },
  {
    path: 'favourites',
    component: FavouritesPage,
  },
];

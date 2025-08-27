import { Routes } from '@angular/router';
import { Favourites } from '../pages/favourites/favourites';
import { HomePage } from '../pages/home/home-page';
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
    component: Favourites,
  },
];

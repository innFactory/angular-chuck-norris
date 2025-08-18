import { Routes } from '@angular/router';
import { Cats } from '../pages/cats/cats';
import { Favourites } from '../pages/favourites/favourites';
import { Home } from '../pages/home/home';
import { Jokes } from '../pages/jokes/jokes';
import { LoginDisplay } from '../security/login-display/login-display';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'account',
    component: LoginDisplay,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'jokes',
    component: Jokes,
  },
  {
    path: 'favourites',
    component: Favourites,
  },
  {
    path: 'cats',
    component: Cats,
  },
  // {
  //   path: '**',
  //     component: ... , // Add error page
  // },
];

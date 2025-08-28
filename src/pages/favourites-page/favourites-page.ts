import { Component } from '@angular/core';
import { JokesTable } from '../../components/jokes-table/jokes-table';

@Component({
  selector: 'app-favourites-page',
  imports: [JokesTable],
  templateUrl: './favourites-page.html',
  styleUrl: './favourites-page.scss',
})
export class FavouritesPage {}

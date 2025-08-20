import { Component } from '@angular/core';
import { JokesTable } from '../../components/jokes-table/jokes-table';

@Component({
  selector: 'app-favourites',
  imports: [JokesTable],
  templateUrl: './favourites.html',
  styleUrl: './favourites.scss',
})
export class Favourites {}

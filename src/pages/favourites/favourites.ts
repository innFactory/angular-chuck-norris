import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AllowedDataTypes } from '../../models/favourite-chuck-joke';
import { FavouritesTableRow } from '../../models/favourites-table-row';
import { FavouriteChuckJokesSevice } from '../../shared/services/favourite-chuck-jokes/favourite-chuck-jokes';

@Component({
  selector: 'app-favourites',
  imports: [MatTableModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './favourites.html',
  styleUrl: './favourites.scss',
})
export class Favourites {
  protected displayedColumns: string[] = ['identifier', 'joke', 'creator', 'action'];
  protected tableData: FavouritesTableRow[] = [];
  private favouriteChuckJokesSevice = inject(FavouriteChuckJokesSevice);
  protected AllowedDataTypes = AllowedDataTypes;

  constructor() {
    this.updateChucksJokesTableData();
  }

  private updateChucksJokesTableData() {
    const favouriteChuckJokes = this.favouriteChuckJokesSevice.getAllJokes();

    favouriteChuckJokes.forEach((favourite, index) => {
      const row: FavouritesTableRow = {
        identifier: index + 1,
        joke: favourite.text,
        creator: 'Chuck',
      };
      this.tableData.push(row);
    });
  }

  protected deleteRow(id: number) {
    console.log('Deletion not yet implemented.');
  }
}

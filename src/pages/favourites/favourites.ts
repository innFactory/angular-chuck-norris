import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { FavouritesTableRow } from '../../models/favourites-table-row';
import { FavouriteChuckJokesSevice } from '../../shared/services/favourite-chuck-jokes/favourite-chuck-jokes-service';

@Component({
  selector: 'app-favourites',
  imports: [MatTableModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './favourites.html',
  styleUrl: './favourites.scss',
})
export class Favourites {
  private favouriteChuckJokesSevice = inject(FavouriteChuckJokesSevice);
  private snackbarService = inject(MatSnackBar);
  protected displayedColumns: string[] = ['id', 'joke', 'creator', 'action'];
  protected tableData: FavouritesTableRow[] = [];

  constructor() {
    this.updateChucksJokesTableData();
  }

  private updateChucksJokesTableData() {
    const favouriteChuckJokes = this.favouriteChuckJokesSevice.getAllJokes();

    favouriteChuckJokes.forEach((favourite) => {
      const row: FavouritesTableRow = {
        id: favourite.id,
        joke: favourite.text,
        creator: 'Chuck',
      };
      this.tableData.push(row);
    });
  }

  protected deleteRow(index: number) {
    this.snackbarService.open('🚨 Löschen noch nicht implementiert');
  }

  protected refreshTable() {
    this.tableData = [];
    this.updateChucksJokesTableData();
  }
}

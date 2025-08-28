import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { CREATOR_CHUCK } from '../../app/app.constants';
import { JokeTableRow } from '../../models/joke-table-row';
import { FavouriteChuckJokesSevice } from '../../shared/services/favourite-chuck-jokes/favourite-chuck-jokes-service';

@Component({
  selector: 'app-jokes-table',
  imports: [MatTableModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './jokes-table.html',
  styleUrl: './jokes-table.scss',
})
export class JokesTable {
  private favouriteChuckJokesSevice = inject(FavouriteChuckJokesSevice);
  private snackbarService = inject(MatSnackBar);
  protected displayedColumns: string[] = ['id', 'content', 'creator', 'action'];
  protected tableData: JokeTableRow[] = [];

  constructor() {
    this.updateChucksJokesTableData();
  }

  private updateChucksJokesTableData() {
    const favouriteChuckJokes = this.favouriteChuckJokesSevice.getAllJokes();

    favouriteChuckJokes.forEach((favourite) => {
      const row: JokeTableRow = {
        id: favourite.id,
        content: favourite.text,
        creator: CREATOR_CHUCK,
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

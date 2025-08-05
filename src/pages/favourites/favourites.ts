import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FavoritesTableRow } from '../../models/favourites-table-row';

const ELEMENT_DATA: FavoritesTableRow[] = [
  { identifier: 1, data: 'HydASDFrogen', creator: 'H' },
  { identifier: 2, data: 'Helium', creator: 'He' },
  { identifier: 3, data: 'Lithium', creator: 'Li' },
  { identifier: 4, data: 'Beryllium', creator: 'Be' },
  { identifier: 5, data: 'Boron', creator: 'B' },
  { identifier: 6, data: 'Carbon', creator: 'C' },
  { identifier: 7, data: 'Nitrogen', creator: 'N' },
  { identifier: 8, data: 'Oxygen', creator: 'O' },
  { identifier: 9, data: 'Fluorine', creator: 'F' },
  { identifier: 10, data: 'Neon', creator: 'Ne' },
];

@Component({
  selector: 'app-favourites',
  imports: [MatTableModule],
  templateUrl: './favourites.html',
  styleUrl: './favourites.scss',
})
export class Favourites {
  protected displayedColumns: string[] = ['identifier', 'data', 'creator'];
  protected tableData: FavoritesTableRow[] = [];

  public ngOnInit() {
    this.tableData = ELEMENT_DATA;
  }
}

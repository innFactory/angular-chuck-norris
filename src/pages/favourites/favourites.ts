import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  identifier: number;
  joke: string;
  creator: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { identifier: 1, joke: 'Hydrogen', creator: 'H' },
  { identifier: 2, joke: 'Helium', creator: 'He' },
  { identifier: 3, joke: 'Lithium', creator: 'Li' },
  { identifier: 4, joke: 'Beryllium', creator: 'Be' },
  { identifier: 5, joke: 'Boron', creator: 'B' },
  { identifier: 6, joke: 'Carbon', creator: 'C' },
  { identifier: 7, joke: 'Nitrogen', creator: 'N' },
  { identifier: 8, joke: 'Oxygen', creator: 'O' },
  { identifier: 9, joke: 'Fluorine', creator: 'F' },
  { identifier: 10, joke: 'Neon', creator: 'Ne' },
];

@Component({
  selector: 'app-favourites',
  imports: [MatTableModule],
  templateUrl: './favourites.html',
  styleUrl: './favourites.scss',
})
export class Favourites {
  displayedColumns: string[] = ['identifier', 'joke', 'creator'];
  dataSource = ELEMENT_DATA;
}

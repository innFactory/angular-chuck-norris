import { Component, effect, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AllowedDataTypes } from '../../models/favourite-data';
import { FavouritesTableRow } from '../../models/favourites-table-row';
import { FavouritesDataService } from '../../shared/services/favourites-data/favourites-data';

@Component({
  selector: 'app-favourites',
  imports: [MatTableModule],
  templateUrl: './favourites.html',
  styleUrl: './favourites.scss',
})
export class Favourites {
  protected displayedColumns: string[] = ['identifier', 'data', 'creator'];
  protected tableData: FavouritesTableRow[] = [];
  private favouritesDataService = inject(FavouritesDataService);
  protected AllowedDataTypes = AllowedDataTypes;

  constructor() {
    effect(() => {
      const favouritesData = this.favouritesDataService.$data();

      favouritesData.forEach((favourite, index) => {
        const row: FavouritesTableRow = {
          identifier: index + 1,
          data: favourite,
          creator: 'Chuck',
        };
        this.tableData.push(row);
      });
    });
  }

  public ngOnInit() {
    // this.tableData = ELEMENT_DATA;
  }
}

import { computed, Injectable, signal } from '@angular/core';
import { AllowedDataTypes, FavouriteData } from '../../../models/favourite-data';

@Injectable({
  providedIn: 'root',
})
export class FavouritesDataService {
  private data = signal<FavouriteData[]>([]);
  public $data = computed(this.data);

  public add(favourite: string, type: AllowedDataTypes) {
    this.data.update((data) => [...data, { data: favourite, type: type }]);
  }
}

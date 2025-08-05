import { Component, inject, resource, ResourceRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GenerationCard } from '../../components/generation-card/generation-card';
import { Cat } from '../../models/cat';
import { AllowedDataTypes } from '../../models/favourite-data';
import { CatFetcher } from '../../shared/services/cat-fetcher/cat-fetcher';
import { FavouritesDataService } from '../../shared/services/favourites-data/favourites-data';

@Component({
  selector: 'app-cats',
  imports: [MatButtonModule, MatIconModule, GenerationCard, MatProgressSpinnerModule],
  templateUrl: './cats.html',
  styleUrl: './cats.scss',
})
export class Cats {
  private catFetcherService = inject(CatFetcher);
  protected catResource: ResourceRef<Cat | undefined> = resource({ loader: () => this.catFetcherService.get() });
  private favouritesDataService = inject(FavouritesDataService);

  protected get urlCatPicture(): string {
    const catValue = this.catResource.value();
    return catValue ? catValue.url : '';
  }

  protected fetchNewCat() {
    this.catResource.reload();
  }

  protected favouriseCat() {
    this.favouritesDataService.add(this.catResource.value()?.url ?? '', AllowedDataTypes.Image);
  }
}

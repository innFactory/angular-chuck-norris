import { Component, inject, resource, ResourceRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GenerationCard } from '../../components/generation-card/generation-card';
import { Cat } from '../../models/cat';
import { CatApiService } from '../../shared/services/cat-api-service/cat-api-service';
// import { FavouritesDataService } from '../../shared/services/favourite-chuck-jokes/favourite-chuck-jokes';

@Component({
  selector: 'app-cats',
  imports: [MatButtonModule, MatIconModule, GenerationCard, MatProgressSpinnerModule],
  templateUrl: './cats.html',
  styleUrl: './cats.scss',
})
export class Cats {
  private catApiService = inject(CatApiService);
  protected catResource: ResourceRef<Cat | undefined> = resource({ loader: () => this.catApiService.get() });
  // private favouritesDataService = inject(FavouritesDataService);

  protected get urlCatPicture(): string {
    const catValue = this.catResource.value();
    return catValue ? catValue.url : '';
  }

  protected fetchNewCat() {
    this.catResource.reload();
  }

  protected favouriseCat() {
    // this.favouritesDataService.add(this.catResource.value()?.url ?? '', AllowedDataTypes.Image);
  }
}

import { Component, inject, resource, ResourceRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GenerationCard } from '../../components/generation-card/generation-card';
import { ChuckNorrisJoke } from '../../models/chuck-norris-joke';
import { AllowedDataTypes } from '../../models/favourite-data';
import { FavouritesDataService } from '../../shared/services/favourites-data/favourites-data';
import { JokeFetcher } from '../../shared/services/joke-fetcher/joke-fetcher';

@Component({
  selector: 'app-jokes',
  imports: [MatButtonModule, MatIconModule, GenerationCard],
  templateUrl: './jokes.html',
  styleUrl: './jokes.scss',
})
export class Jokes {
  private jokeFetcherService = inject(JokeFetcher);
  protected jokeResource: ResourceRef<ChuckNorrisJoke | undefined> = resource({ loader: () => this.jokeFetcherService.get() });
  private favouritesDataService = inject(FavouritesDataService);

  protected get jokeString(): string {
    const jokeResourceValue = this.jokeResource.value();
    return jokeResourceValue ? jokeResourceValue.value : 'No jokes available.';
  }

  protected fetchNewJoke() {
    this.jokeResource.reload();
  }

  protected favouriseChucksJoke() {
    this.favouritesDataService.add(this.jokeResource.value()?.value ?? '', AllowedDataTypes.Joke);
  }
}

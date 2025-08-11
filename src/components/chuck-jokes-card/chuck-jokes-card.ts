import { Component, inject, resource, ResourceRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChuckNorrisJoke } from '../../models/chuck-norris-joke';
import { FavouriteChuckJokesSevice } from '../../shared/services/favourite-chuck-jokes/favourite-chuck-jokes';
import { JokeFetcher } from '../../shared/services/joke-fetcher/joke-fetcher';
import { GenerationCard } from '../generation-card/generation-card';

@Component({
  selector: 'app-chuck-jokes-card',
  imports: [MatButtonModule, MatIconModule, GenerationCard],
  templateUrl: './chuck-jokes-card.html',
  styleUrl: './chuck-jokes-card.scss',
})
export class ChuckJokesCard {
  private snackBar = inject(MatSnackBar);
  private jokeFetcherService = inject(JokeFetcher);
  protected jokeResource: ResourceRef<ChuckNorrisJoke | undefined> = resource({ loader: () => this.jokeFetcherService.get() });
  private favouriteChuckJokesSevice = inject(FavouriteChuckJokesSevice);

  protected get jokeString(): string {
    const jokeResourceValue = this.jokeResource.value();
    return jokeResourceValue ? jokeResourceValue.value : 'No jokes available.';
  }

  protected fetchNewJoke() {
    this.jokeResource.reload();
  }

  protected favouriseChucksJoke() {
    const jokeResourceValue = this.jokeResource.value();
    if (jokeResourceValue !== undefined) {
      this.favouriteChuckJokesSevice.add(jokeResourceValue.value);
      this.snackBar.open('⭐️ New joke added', 'X', { horizontalPosition: 'end' });
    }
  }
}

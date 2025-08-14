import { Component, inject, ResourceRef } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
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
  private favouriteChuckJokesSevice = inject(FavouriteChuckJokesSevice);
  protected jokeResource: ResourceRef<ChuckNorrisJoke | undefined>;

  constructor() {
    this.jokeResource = rxResource({ stream: () => this.jokeFetcherService.get() });
  }

  protected get jokeDisplayed(): string {
    const jokeResourceValue = this.jokeResource.value();
    if (jokeResourceValue !== undefined) {
      return jokeResourceValue.value;
    } else {
      return '';
    }
  }

  protected fetchNewJoke() {
    this.jokeResource.reload();
  }

  protected favouriseChucksJoke() {
    const jokeResourceValue = this.jokeResource.value();
    if (jokeResourceValue !== undefined) {
      this.favouriteChuckJokesSevice.add(jokeResourceValue.value);
      this.snackBar.open('⭐️ Witz hinzugefügt', 'X', { duration: 1000, horizontalPosition: 'end' });
    }
  }
}

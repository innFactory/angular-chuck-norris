import { Component, inject, ResourceRef } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiResponseChuckJoke } from '../../models/api-response-chuck-joke';
import { FavouriteChuckJokesService } from '../../shared/services/favourite-chuck-jokes/favourite-chuck-jokes-service';
import { JokeApiService } from '../../shared/services/joke-api-service/joke-api-service';
import { GenerationCard } from '../generation-card/generation-card';

@Component({
  selector: 'app-chuck-jokes-card',
  imports: [MatButtonModule, MatIconModule, GenerationCard],
  templateUrl: './chuck-jokes-card.html',
  styleUrl: './chuck-jokes-card.scss',
})
export class ChuckJokesCard {
  private snackbarService = inject(MatSnackBar);
  private jokeApiService = inject(JokeApiService);
  private favouriteChuckJokesService = inject(FavouriteChuckJokesService);
  protected jokeResource: ResourceRef<ApiResponseChuckJoke | undefined>;

  constructor() {
    this.jokeResource = rxResource({ stream: () => this.jokeApiService.get() });
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
    this.snackbarService.open('✅ Neuer Witz');
  }

  protected favouriseChucksJoke() {
    const jokeResourceValue = this.jokeResource.value();
    if (jokeResourceValue !== undefined) {
      this.favouriteChuckJokesService.add(jokeResourceValue.value);
      this.snackbarService.open('⭐️ Witz hinzugefügt');
      this.fetchNewJoke();
    }
  }
}

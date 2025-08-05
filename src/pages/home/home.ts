import { Component, inject, resource, ResourceRef } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GenerationCard } from '../../components/generation-card/generation-card';
import { ChuckNorrisJoke } from '../../models/chuck-norris-joke';
import { JokeFetcher } from '../../shared/services/joke-fetcher/joke-fetcher';
@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatIconModule, GenerationCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private jokeFetcherService = inject(JokeFetcher);
  protected jokeResource: ResourceRef<ChuckNorrisJoke | undefined> = resource({ loader: () => this.jokeFetcherService.get() });

  protected get jokeString(): string {
    const jokeResourceValue = this.jokeResource.value();
    return jokeResourceValue ? jokeResourceValue.value : 'No jokes available.';
  }

  protected fetchNewJoke() {
    this.jokeResource.reload();
  }
}

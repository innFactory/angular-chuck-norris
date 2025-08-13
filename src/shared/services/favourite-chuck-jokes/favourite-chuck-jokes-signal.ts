import { Injectable, signal } from '@angular/core';
import { ChucksJoke } from '../../../models/favourite-chuck-joke';

@Injectable({
  providedIn: 'root',
})
/*
 * IMPORTANT: Only visit component, from challenge Ⅳ.Ⅴ.
 */
export class FavouriteChuckJokesSignalService {
  private data = signal<ChucksJoke[]>([]);
  private nextId: number = 1;

  public add(jokeText: string) {
    const joke: ChucksJoke = {
      id: this.nextId++,
      text: jokeText,
    };
    this.data.update((actual) => [...actual, joke]);
  }

  public remove(id: number) {
    const index = this.data().findIndex((joke) => joke.id === id);
    if (index !== -1) {
      // this.data.splice(index, 1);
      // TODO Signal remove
    }
  }

  public getAllJokes(): ChucksJoke[] {
    return this.data();
  }
}

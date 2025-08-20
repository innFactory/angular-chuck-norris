import { computed, Injectable, signal } from '@angular/core';
import { ChucksJoke } from '../../../../models/favourite-chuck-joke';

@Injectable({
  providedIn: 'root',
})
/*
 * IMPORTANT: Only visit component, from challenge Ⅳ.Ⅴ.
 */
export class FavouriteChuckJokesSignalService {
  private data = signal<ChucksJoke[]>([]);
  public $data = computed(() => this.data());
  private nextId: number = 1;

  public add(jokeText: string) {
    const joke: ChucksJoke = {
      id: this.nextId++,
      text: jokeText,
    };
    this.data.update((actual) => [...actual, joke]);
  }

  public remove(id: number) {
    this.data.update((actual) => actual.filter((joke) => joke.id !== id));
  }

  public getAll(): ChucksJoke[] {
    return this.data();
  }

  // Ignore method until challenge Ⅵ.
  public set(data: ChucksJoke[]) {
    this.data.set(data);
  }
}

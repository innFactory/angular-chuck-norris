import { computed, Injectable, signal } from '@angular/core';
import { JokeData } from '../../../../models/joke-data';

@Injectable({
  providedIn: 'root',
})
/*
 * IMPORTANT: Only visit component, from challenge Ⅳ.Ⅴ.
 */
export class FavouriteChuckJokesSignalService {
  private data = signal<JokeData[]>([]);
  public $data = computed(() => this.data());
  private nextId: number = 1;

  public add(jokeText: string) {
    const joke: JokeData = {
      id: this.nextId++,
      text: jokeText,
    };
    this.data.update((actual) => [...actual, joke]);
  }

  public remove(id: number) {
    this.data.update((actual) => actual.filter((joke) => joke.id !== id));
  }

  public getAll(): JokeData[] {
    return this.data();
  }

  // Ignore method until challenge Ⅵ.
  public set(data: JokeData[]) {
    this.data.set(data);
  }
}

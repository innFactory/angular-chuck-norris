import { computed, Injectable, signal } from '@angular/core';
import { CHUCK_JOKES_PREFIX } from '../../../../app/app.constants';
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
      id: CHUCK_JOKES_PREFIX + this.nextId,
      text: jokeText,
    };
    this.nextId += 1;
    this.data.update((actual) => [...actual, joke]);
  }

  public remove(id: string) {
    this.data.update((actual) => actual.filter((joke) => joke.id !== id));
  }

  public getAll(): JokeData[] {
    return this.data();
  }

  // Ignore method until challenge Ⅵ.
  public setFromDatabase(data: JokeData[]) {
    this.data.set(data);
    const setNextIDToHighest = () => {
      let highest = 0;
      data.forEach((row) => {
        let newString = row.id.split(CHUCK_JOKES_PREFIX)[1];
        let newNumber: number = parseInt(newString);
        highest = newNumber > highest ? newNumber : highest;
      });
      this.nextId = highest + 1;
      console.log(this.nextId);
    };
    setNextIDToHighest();
  }
}

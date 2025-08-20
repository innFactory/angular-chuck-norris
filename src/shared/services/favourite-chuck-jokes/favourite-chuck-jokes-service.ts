import { Injectable } from '@angular/core';
import { ChucksJoke } from '../../../models/favourite-chuck-joke';

@Injectable({
  providedIn: 'root',
})
export class FavouriteChuckJokesSevice {
  private data: ChucksJoke[] = [];
  private nextId: number = 1;

  public add(jokeText: string) {
    const joke: ChucksJoke = {
      id: this.nextId++,
      text: jokeText,
    };
    this.data.push(joke);
  }

  public remove(id: number) {
    const index = this.data.findIndex((joke) => joke.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  public getAllJokes(): ChucksJoke[] {
    return this.data;
  }
}

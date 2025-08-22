import { Injectable } from '@angular/core';
import { JokeData } from '../../../../models/joke-data';

@Injectable({
  providedIn: 'root',
})
export class FavouriteChuckJokesSevice {
  private data: JokeData[] = [];
  private nextId: number = 1;

  public add(jokeText: string) {
    const joke: JokeData = {
      id: 'C_' + this.nextId++,
      text: jokeText,
    };
    this.data.push(joke);
  }

  public remove(id: string) {
    const index = this.data.findIndex((joke) => joke.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  public getAllJokes(): JokeData[] {
    return this.data;
  }
}

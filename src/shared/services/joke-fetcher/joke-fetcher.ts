import { Injectable } from '@angular/core';
import { URL_CHUCK_NORRIS_API } from '../../../app/app.constants';
import { ChuckNorrisJoke } from '../../../models/chuck-norris-joke';

@Injectable({
  providedIn: 'root',
})
export class JokeFetcher {
  public async get(): Promise<ChuckNorrisJoke> {
    return fetch(URL_CHUCK_NORRIS_API).then((res) => res.json());
  }
}

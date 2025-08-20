import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_CHUCK_NORRIS_API } from '../../../app/app.constants';
import { ChuckNorrisJoke } from '../../../models/chuck-norris-joke';

@Injectable({
  providedIn: 'root',
})
export class JokeApiService {
  private httpClientService = inject(HttpClient);

  public get(): Observable<ChuckNorrisJoke> {
    return this.httpClientService.get<ChuckNorrisJoke>(URL_CHUCK_NORRIS_API);
  }
}

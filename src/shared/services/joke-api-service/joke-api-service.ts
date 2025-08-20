import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_CHUCK_NORRIS_API } from '../../../app/app.constants';
import { ApiResponseChuckJoke } from '../../../models/api-response-chuck-joke';

@Injectable({
  providedIn: 'root',
})
export class JokeApiService {
  private httpClientService = inject(HttpClient);

  public get(): Observable<ApiResponseChuckJoke> {
    return this.httpClientService.get<ApiResponseChuckJoke>(URL_CHUCK_NORRIS_API);
  }
}

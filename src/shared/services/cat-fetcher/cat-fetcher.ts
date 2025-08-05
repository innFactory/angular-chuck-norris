import { Injectable } from '@angular/core';
import { URL_CAT_API } from '../../../app/app.constants';
import { Cat } from '../../../models/cat';

@Injectable({
  providedIn: 'root',
})
export class CatFetcher {
  public async get(): Promise<Cat> {
    return fetch(URL_CAT_API).then((res) => res.json());
  }
}

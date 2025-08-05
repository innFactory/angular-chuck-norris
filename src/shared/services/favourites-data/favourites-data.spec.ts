import { TestBed } from '@angular/core/testing';

import { FavouritesData } from './favourites-data';

describe('FavouritesData', () => {
  let service: FavouritesData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritesData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

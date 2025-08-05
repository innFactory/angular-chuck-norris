import { TestBed } from '@angular/core/testing';

import { CatFetcher } from './cat-fetcher';

describe('CatFetcher', () => {
  let service: CatFetcher;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatFetcher);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

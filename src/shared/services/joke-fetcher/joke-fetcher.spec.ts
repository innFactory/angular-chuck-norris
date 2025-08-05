import { TestBed } from '@angular/core/testing';

import { JokeFetcher } from './joke-fetcher';

describe('JokeFetcher', () => {
  let service: JokeFetcher;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeFetcher);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

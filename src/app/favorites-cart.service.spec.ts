import { TestBed } from '@angular/core/testing';

import { FavoritesCartService } from './favorites-cart.service';

describe('FavoritesCartService', () => {
  let service: FavoritesCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

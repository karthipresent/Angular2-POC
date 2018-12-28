import { TestBed } from '@angular/core/testing';

import { GiftCartService } from './gift-cart.service';

describe('GiftCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftCartService = TestBed.get(GiftCartService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { StockmarketService } from './stockmarket.service';

describe('StockmarketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockmarketService]
    });
  });

  it('should be created', inject([StockmarketService], (service: StockmarketService) => {
    expect(service).toBeTruthy();
  }));
});

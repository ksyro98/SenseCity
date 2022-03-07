import { TestBed } from '@angular/core/testing';

import { StorageCityService } from './storage-city.service';

describe('StorageCityService', () => {
  let service: StorageCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

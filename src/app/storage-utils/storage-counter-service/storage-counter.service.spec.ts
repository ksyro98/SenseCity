import { TestBed } from '@angular/core/testing';

import { StorageCounterService } from './storage-counter.service';

describe('StorageCounterService', () => {
  let service: StorageCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

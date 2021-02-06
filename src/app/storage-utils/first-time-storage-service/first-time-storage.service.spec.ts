import { TestBed } from '@angular/core/testing';

import { FirstTimeStorageService } from './first-time-storage.service';

describe('FirstTimeStorageService', () => {
  let service: FirstTimeStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstTimeStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

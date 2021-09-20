import { TestBed } from '@angular/core/testing';

import { NetworkUtilsService } from './network-utils.service';

describe('NetworkUtilsService', () => {
  let service: NetworkUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

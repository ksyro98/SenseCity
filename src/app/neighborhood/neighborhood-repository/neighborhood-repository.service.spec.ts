import { TestBed } from '@angular/core/testing';

import { NeighborhoodRepositoryService } from './neighborhood-repository.service';

describe('NeighborhoodRepositoryService', () => {
  let service: NeighborhoodRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeighborhoodRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

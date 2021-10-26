import { TestBed } from '@angular/core/testing';

import { TechnicalRequestRepositoryService } from './technical-request-repository.service';

describe('TechnicalRequestRepositoryService', () => {
  let service: TechnicalRequestRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalRequestRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VerificationRepositoryService } from './verification-repository.service';

describe('ProfileRepositoryService', () => {
  let service: VerificationRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificationRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

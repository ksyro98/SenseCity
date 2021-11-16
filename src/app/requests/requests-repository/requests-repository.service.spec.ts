import { TestBed } from '@angular/core/testing';

import { RequestsRepositoryService } from './requests-repository.service';

describe('RequestsRepositoryService', () => {
  let service: RequestsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

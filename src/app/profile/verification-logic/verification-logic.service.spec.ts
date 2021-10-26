import { TestBed } from '@angular/core/testing';

import { VerificationLogicService } from './verification-logic.service';

describe('VerificationLogicService', () => {
  let service: VerificationLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificationLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

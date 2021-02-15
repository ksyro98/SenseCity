import { TestBed } from '@angular/core/testing';

import { StorageFeedbackCounterService } from './storage-feedback-counter.service';

describe('StorageFeedbackCounterService', () => {
  let service: StorageFeedbackCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageFeedbackCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

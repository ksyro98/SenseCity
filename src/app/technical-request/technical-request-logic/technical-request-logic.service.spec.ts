import { TestBed } from '@angular/core/testing';

import { TechnicalRequestLogicService } from './technical-request-logic.service';

describe('TechnicalRequestLogicService', () => {
  let service: TechnicalRequestLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalRequestLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RequestsLogicService } from './requests-logic.service';

describe('RequestsLogicService', () => {
  let service: RequestsLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestsLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

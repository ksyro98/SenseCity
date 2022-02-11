import { TestBed } from '@angular/core/testing';

import { NeighborhoodLogicService } from './neighborhood-logic.service';

describe('NeighborhoodLogicService', () => {
  let service: NeighborhoodLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeighborhoodLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

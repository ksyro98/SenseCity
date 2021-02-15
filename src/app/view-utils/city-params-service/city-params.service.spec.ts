import { TestBed } from '@angular/core/testing';

import { CityParamsService } from './city-params.service';

describe('CityParamsService', () => {
  let service: CityParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

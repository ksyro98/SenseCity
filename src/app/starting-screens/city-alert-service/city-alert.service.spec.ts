import { TestBed } from '@angular/core/testing';

import { CityAlertService } from './city-alert.service';

describe('CityAlertService', () => {
  let service: CityAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

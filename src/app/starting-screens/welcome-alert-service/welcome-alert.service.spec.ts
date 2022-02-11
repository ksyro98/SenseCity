import { TestBed } from '@angular/core/testing';

import { WelcomeAlertService } from './welcome-alert.service';

describe('CityAlertService', () => {
  let service: WelcomeAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

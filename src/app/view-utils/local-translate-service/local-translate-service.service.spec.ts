import { TestBed } from '@angular/core/testing';

import { LocalTranslateService } from './local-translate.service';

describe('LocalTranslateServiceService', () => {
  let service: LocalTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

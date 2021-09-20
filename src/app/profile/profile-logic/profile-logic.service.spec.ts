import { TestBed } from '@angular/core/testing';

import { ProfileLogicService } from './profile-logic.service';

describe('ProfileLogicService', () => {
  let service: ProfileLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StorageTranslationService } from './storage-translation.service';

describe('StorageTranslationService', () => {
  let service: StorageTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

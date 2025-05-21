import { TestBed } from '@angular/core/testing';

import { ValidationFilterService } from './validation-filter.service';

describe('ValidationFilterService', () => {
  let service: ValidationFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

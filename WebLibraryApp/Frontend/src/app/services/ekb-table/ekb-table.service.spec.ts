import { TestBed } from '@angular/core/testing';

import { EkbTableService } from './ekb-table.service';

describe('EkbTableService', () => {
  let service: EkbTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EkbTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

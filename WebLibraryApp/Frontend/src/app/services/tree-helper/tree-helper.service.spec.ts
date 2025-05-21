import { TestBed } from '@angular/core/testing';

import { TreeHelperService } from './tree-helper.service';

describe('TreeHelperService', () => {
  let service: TreeHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FileWorkerService } from './file-worker.service';

describe('FileWorkerService', () => {
  let service: FileWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

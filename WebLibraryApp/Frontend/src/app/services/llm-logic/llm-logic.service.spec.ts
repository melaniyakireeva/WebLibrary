import { TestBed } from '@angular/core/testing';

import { LlmLogicService } from './llm-logic.service';

describe('LlmLogicService', () => {
  let service: LlmLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlmLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

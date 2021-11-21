import { TestBed } from '@angular/core/testing';

import { ChatInformationService } from './chat-information.service';

describe('ChatInformationService', () => {
  let service: ChatInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

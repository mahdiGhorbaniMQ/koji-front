import { TestBed } from '@angular/core/testing';

import { ChatCntrollerService } from './chat-cntroller.service';

describe('ChatCntrollerService', () => {
  let service: ChatCntrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatCntrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

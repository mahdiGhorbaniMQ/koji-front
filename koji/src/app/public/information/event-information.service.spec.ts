import { TestBed } from '@angular/core/testing';

import { EventInformationService } from './event-information.service';

describe('EventInformationService', () => {
  let service: EventInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HeaderInformationService } from './header-information.service';

describe('HeaderInformationService', () => {
  let service: HeaderInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

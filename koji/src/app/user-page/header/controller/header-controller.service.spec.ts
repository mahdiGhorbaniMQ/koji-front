import { TestBed } from '@angular/core/testing';

import { HeaderControllerService } from './header-controller.service';

describe('HeaderControllerService', () => {
  let service: HeaderControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UserPageControllerService } from './user-page-controller.service';

describe('UserPageControllerService', () => {
  let service: UserPageControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPageControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

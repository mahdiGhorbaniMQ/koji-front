import { TestBed } from '@angular/core/testing';

import { UserPageInformationService } from './user-page-information.service';

describe('UserPageInformationService', () => {
  let service: UserPageInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPageInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UserInofrmationControllerService } from './user-inofrmation-controller.service';

describe('UserInofrmationControllerService', () => {
  let service: UserInofrmationControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInofrmationControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageSearchComponent } from './user-page-search.component';

describe('UserPageSearchComponent', () => {
  let component: UserPageSearchComponent;
  let fixture: ComponentFixture<UserPageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

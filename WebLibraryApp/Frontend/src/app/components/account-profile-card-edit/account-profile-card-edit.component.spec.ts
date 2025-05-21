import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfileCardEditComponent } from './account-profile-card-edit.component';

describe('AccountProfileCardEditComponent', () => {
  let component: AccountProfileCardEditComponent;
  let fixture: ComponentFixture<AccountProfileCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountProfileCardEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountProfileCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

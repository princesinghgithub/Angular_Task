import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChnageUsernameComponent } from './chnage-username.component';

describe('ChnageUsernameComponent', () => {
  let component: ChnageUsernameComponent;
  let fixture: ComponentFixture<ChnageUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChnageUsernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChnageUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

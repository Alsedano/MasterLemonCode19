import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogged } from './user-logged';

describe('UserLogged', () => {
  let component: UserLogged;
  let fixture: ComponentFixture<UserLogged>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLogged]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLogged);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

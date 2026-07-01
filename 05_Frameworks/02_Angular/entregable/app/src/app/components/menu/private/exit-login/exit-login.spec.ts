import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitLogin } from './exit-login';

describe('ExitLogin', () => {
  let component: ExitLogin;
  let fixture: ComponentFixture<ExitLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

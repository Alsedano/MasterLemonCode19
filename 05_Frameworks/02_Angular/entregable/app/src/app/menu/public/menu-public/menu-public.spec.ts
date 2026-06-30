import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPublic } from './menu-public';

describe('Menu', () => {
  let component: MenuPublic;
  let fixture: ComponentFixture<MenuPublic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPublic]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MenuPublic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

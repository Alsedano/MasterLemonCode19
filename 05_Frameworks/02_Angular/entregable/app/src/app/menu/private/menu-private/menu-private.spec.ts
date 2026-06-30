import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrivate } from './menu-private';

describe('Menu', () => {
  let component: MenuPrivate;
  let fixture: ComponentFixture<MenuPrivate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPrivate]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MenuPrivate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

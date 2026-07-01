import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedImage } from './selected-image';

describe('SelectedImage', () => {
  let component: SelectedImage;
  let fixture: ComponentFixture<SelectedImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

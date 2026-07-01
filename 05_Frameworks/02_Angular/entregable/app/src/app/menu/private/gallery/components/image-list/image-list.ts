import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { createImageGallery, GalleryVm } from '../../gallery.vm';
import { MatListModule } from '@angular/material/list';
import { SlicePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-image-list',
  imports: [MatListModule, MatIcon, SlicePipe],
  templateUrl: './image-list.html',
  styleUrl: './image-list.scss',
})
export class ImageList implements OnChanges {
  @Input() imageList: GalleryVm[] = [];
  @Input() selectedImageIndex: number = 0;
  @Output() newImageSelected: EventEmitter<number> = new EventEmitter();

  newImageSelectedId: number = 1;
  sliceInit: number = 0;
  sliceEnd: number = 3;
  disableSliceInit: boolean = true;
  disableSliceEnd: boolean = false;

  constructor() {
  }

  ngOnChanges(): void {
    if (this.selectedImageIndex >= this.sliceEnd)
      this.incSlice();

    if (this.selectedImageIndex === this.imageList.length)
      this.resetSlice();
  }

  imageFromListSelected(id: number) {
    this.newImageSelectedId = id;
    this.selectedImageIndex = this.getImageIndexById(id);
    this.newImageSelected.emit(id);
  }

  isSelected(imageId: number) {
    return (this.getImageIndexById(imageId) === this.selectedImageIndex);
  }

  incSlice() {
    this.sliceInit += 3;
    this.sliceEnd += 3;
    this.disableSliceInit = false;
    if (this.sliceEnd > this.imageList.length) {
      this.disableSliceEnd = true;
    }
  }

  decSlice() {
    this.sliceInit -= 3;
    this.sliceEnd -= 3;
    this.disableSliceEnd = false;
    if (this.sliceInit <= 0) {
      this.disableSliceInit = true;
    }
  }

  private getImageIndexById(id: number): number {
    return this.imageList.findIndex(x => x.id === id);
  }

  private resetSlice() {
    this.sliceInit = 0;
    this.sliceEnd = 3;
    this.disableSliceEnd = false;
  }
}

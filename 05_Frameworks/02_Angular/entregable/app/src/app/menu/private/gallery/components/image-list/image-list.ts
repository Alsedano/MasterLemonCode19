import { Component, EventEmitter, Input, Output } from '@angular/core';
import { createImageGallery, GalleryVm } from '../../gallery.vm';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-image-list',
  imports: [MatListModule],
  templateUrl: './image-list.html',
  styleUrl: './image-list.scss',
})
export class ImageList {
  @Input() imageList: GalleryVm[] = [];
  @Input() selectedImageIndex: number = 0;
  @Output() newImageSelected: EventEmitter<number> = new EventEmitter();

  newImageSelectedId: number = 1;

  constructor() {
  }

  imageFromListSelected(id: number) {
    this.newImageSelectedId = id;
    this.selectedImageIndex = this.getImageIndexById(id);
    this.newImageSelected.emit(id);
  }

  isSelected(imageId: number) {
    console.log(`imageId: ${imageId}, selectedImageIndex: ${this.selectedImageIndex}`);
    return (this.getImageIndexById(imageId) === this.selectedImageIndex);
  }

  private getImageIndexById(id: number): number {
    return this.imageList.findIndex(x => x.id === id);
  }
}

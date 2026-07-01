import { Component, OnInit } from '@angular/core';
import { ButtonPanel } from './components/button-panel/button-panel';
import { ImageList } from './components/image-list/image-list';
import { SelectedImage } from './components/selected-image/selected-image';
import { createImageGallery, GalleryVm } from './gallery.vm';

@Component({
  selector: 'app-gallery',
  imports: [ButtonPanel, ImageList, SelectedImage],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery implements OnInit {

  selectedImage: GalleryVm = {
    id: 0,
    src: '',
    title: ''
  };
  imageList: GalleryVm[] = [];
  selectedIndex: number = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.imageList = createImageGallery();
    this.selectedImage = this.imageList[0];
  }

  imageFromListSelected(id: number) {
    console.log(`Image selected: ${id}`);
    this.selectedImage = this.imageList.find(x => x.id === id)!;
  }

  updateImageSelectedByIndex(index: number) {

    if (index <= this.imageList.length) {
      this.selectedIndex = index;
      this.selectedImage = this.imageList[index];
    }
  }
}

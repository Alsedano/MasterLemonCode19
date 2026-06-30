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

  constructor() {

  }

  ngOnInit(): void {
    this.imageList = createImageGallery();
    this.selectedImage = this.imageList[0];
  }
}

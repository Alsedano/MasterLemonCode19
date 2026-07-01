import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonPanel } from './components/button-panel/button-panel';
import { ImageList } from './components/image-list/image-list';
import { SelectedImage } from './components/selected-image/selected-image';
import { createImageGallery, GalleryVm } from './gallery.vm';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-gallery',
  imports: [ButtonPanel, ImageList, SelectedImage],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery implements OnInit, OnDestroy {

  selectedImage: GalleryVm = {
    id: 0,
    src: '',
    title: ''
  };
  imageList: GalleryVm[] = [];
  selectedIndex: number = 0;
  scaleImage: number = 1;

  private subscription!: Subscription;

  constructor() {

  }

  ngOnInit(): void {
    this.imageList = createImageGallery();
    this.selectedImage = this.imageList[0];
  }

  imageFromListSelected(id: number) {
    this.selectedImage = this.imageList.find(x => x.id === id)!;
    this.selectedIndex = this.imageList.findIndex(x => x.id === id);
  }

  updateImageSelectedByIndex(index: number) {
    if (index <= this.imageList.length) {
      this.selectedIndex = index;
      this.selectedImage = this.imageList[index];
    }
  }

  increaseImagePanel() {
    this.scaleImage += 0.1;
  }

  decreaseImagePanel() {
    this.scaleImage -= 0.1;
  }

  playCarousel() {
    this.subscription = timer(0, 2000).subscribe(() => {
      this.selectedIndex++;
      if (this.selectedIndex > this.imageList.length) this.selectedIndex = 0;

      this.selectedImage = this.imageList[this.selectedIndex];
    });
  }

  stopCarousel() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.stopCarousel();
  }
}

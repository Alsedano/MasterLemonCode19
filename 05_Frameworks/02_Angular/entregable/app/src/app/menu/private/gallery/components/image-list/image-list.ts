import { Component, Input } from '@angular/core';
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

  constructor() {


  }
}

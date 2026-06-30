import { Component } from '@angular/core';
import { ButtonPanel } from './components/button-panel/button-panel';
import { ImageList } from './components/image-list/image-list';
import { SelectedImage } from './components/selected-image/selected-image';

@Component({
  selector: 'app-gallery',
  imports: [ButtonPanel, ImageList, SelectedImage],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {

}

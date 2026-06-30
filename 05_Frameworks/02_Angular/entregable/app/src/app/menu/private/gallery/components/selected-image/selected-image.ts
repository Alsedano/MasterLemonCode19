import { Component, Input } from '@angular/core';
import { GalleryVm } from '../../gallery.vm';

@Component({
  selector: 'app-selected-image',
  imports: [],
  templateUrl: './selected-image.html',
  styleUrl: './selected-image.scss',
})
export class SelectedImage {
  @Input() selectedImage: GalleryVm = {
    id: 0,
    src: '',
    title: ''
  };
}

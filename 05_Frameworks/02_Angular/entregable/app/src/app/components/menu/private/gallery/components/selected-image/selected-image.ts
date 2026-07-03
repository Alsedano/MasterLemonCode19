import { Component, Input } from '@angular/core';
import { GalleryVm } from '../../gallery.vm';
import { Rotate } from '@/app/directives/rotate';

@Component({
  selector: 'app-selected-image',
  imports: [Rotate],
  templateUrl: './selected-image.html',
  styleUrl: './selected-image.scss',
})
export class SelectedImage {
  @Input() selectedImage: GalleryVm = {
    id: 0,
    src: '',
    title: ''
  };
  @Input() zoomInScaleImage: number = 1;



}

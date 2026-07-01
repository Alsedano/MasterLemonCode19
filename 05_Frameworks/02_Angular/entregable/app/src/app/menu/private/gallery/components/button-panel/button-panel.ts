import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-button-panel',
  imports: [MatIcon],
  templateUrl: './button-panel.html',
  styleUrl: './button-panel.scss',
})
export class ButtonPanel {
  @Input() totalImages: number = 0;
  @Output() newImageIndexSelected: EventEmitter<number> = new EventEmitter();

  currentImageIndex = 0;

  isDisabledPrevBtn() {
    console.log(`totalImages: ${this.totalImages}, currentIndex: ${this.currentImageIndex}`);
    return this.currentImageIndex === 0;
  }

  isDisabledNextBtn() {
    console.log(`totalImages: ${this.totalImages}, currentIndex: ${this.currentImageIndex}`);
    return this.currentImageIndex === this.totalImages - 1;
  }

  navigateToAnterior() {
    this.currentImageIndex--;
    this.newImageIndexSelected.emit(this.currentImageIndex);
  }

  navigateToSiguiente() {
    this.currentImageIndex++;
    this.newImageIndexSelected.emit(this.currentImageIndex);
  }

  navigateToAumentar() {

  }

  navigateToDisminuir() {

  }

  navigateToPlay() {

  }

  navigateToStop() {

  }
}

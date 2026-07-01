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
  @Input() selectedImageIndex: number = 0;
  @Output() newImageIndexSelected: EventEmitter<number> = new EventEmitter<number>();
  @Output() increaseImage: EventEmitter<void> = new EventEmitter<void>();
  @Output() decreaseImage: EventEmitter<void> = new EventEmitter<void>();
  @Output() play: EventEmitter<void> = new EventEmitter<void>();
  @Output() stop: EventEmitter<void> = new EventEmitter<void>();

  disableStart: boolean = false;
  disableStop: boolean = true;

  isDisabledPrevBtn() {
    return this.selectedImageIndex === 0;
  }

  isDisabledNextBtn() {
    return this.selectedImageIndex === this.totalImages - 1;
  }

  navigateToAnterior() {
    this.selectedImageIndex--;
    this.newImageIndexSelected.emit(this.selectedImageIndex);
  }

  navigateToSiguiente() {
    this.selectedImageIndex++;
    this.newImageIndexSelected.emit(this.selectedImageIndex);
  }

  navigateToAumentar() {
    this.increaseImage.emit();
  }

  navigateToDisminuir() {
    this.decreaseImage.emit();
  }

  navigateToPlay() {
    this.disableStart = true;
    this.disableStop = false;
    this.play.emit();
  }

  navigateToStop() {
    this.disableStart = false;
    this.disableStop = true;
    this.stop.emit();
  }
}

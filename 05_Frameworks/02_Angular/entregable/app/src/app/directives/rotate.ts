import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'img [appRotate]'
})
export class Rotate implements OnInit {

  @Input() public rotateDeg!: number;
  @Input() public step!: number;

  private rotDeg: number = 0;

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.rotDeg = this.rotateDeg || 0;
    this.step = this.step || 10;

    if (this.rotDeg > 0) {
      this.el.nativeElement.style.transform = 'rotate(' + this.rotDeg + 'deg)';
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: PointerEvent) {

    if (event.shiftKey) this.rotDeg -= this.step
    else this.rotDeg += this.step

    this.el.nativeElement.style.transform = 'rotate(' + this.rotDeg + 'deg)';
  }
}


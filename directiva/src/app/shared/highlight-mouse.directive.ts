import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color', 'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color", "white"
    // );
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
  //  private elementRef: ElementRef,
  //  private render: Renderer2
  ) { }

}

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2) {
    // console.log(this.elementRef.nativeElement);
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow'
    this.render.setStyle(this.elementRef.nativeElement,
      'backgroundColor', 'yellow  ');
  }

}

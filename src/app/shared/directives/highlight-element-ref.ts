import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightElementRef]'
})
export class HighlightElementRef {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}

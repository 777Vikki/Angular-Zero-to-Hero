import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightHostbinding]'
})
export class HighlightHostbinding {
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;  
 
  @HostListener('mouseenter') 
  onMouseEnter() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.backgroundColor = '';
  }
}

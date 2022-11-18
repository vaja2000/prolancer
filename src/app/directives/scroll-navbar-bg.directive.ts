import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollNavbarBg]'
})
export class ScrollNavbarBgDirective {

  constructor(
    private el:ElementRef,
    private renderer:Renderer2
  ) { } 
  @HostListener("document:scroll") scroll() {
    if(window.scrollY > 70)
    this.renderer.setStyle(this.el.nativeElement,"background","#5875e4")
    else
    this.renderer.setStyle(this.el.nativeElement,"background","transparent")
  }
}

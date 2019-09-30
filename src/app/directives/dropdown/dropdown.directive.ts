import { Directive, QueryList, ContentChildren, ViewChildren, AfterContentInit, ElementRef, Renderer2, Renderer } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements AfterContentInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterContentInit(): void {
    this.elRef.nativeElement.addEventListener('click', (e) => {

      const liRef = new ElementRef(e.srcElement.offsetParent);
      const ulRef = new ElementRef(e.srcElement.offsetParent.lastChild);
      if (liRef.nativeElement.classList.contains('active')) {
        this.renderer.removeClass(liRef.nativeElement, 'active');
        this.renderer.setStyle(ulRef.nativeElement, 'display', 'none');
      } else {
        this.renderer.addClass(liRef.nativeElement, 'active');
        this.renderer.setStyle(ulRef.nativeElement, 'display', 'block');
      }
    });
  }
}

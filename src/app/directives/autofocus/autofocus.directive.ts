import { Directive, Input, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterContentInit {

  @Input() public appAutoFocus: boolean;

  constructor(private el: ElementRef) { }

  ngAfterContentInit(): void {
    setInterval(() => {
      this.el.nativeElement.focus();
    }, 500);
  }

}

import { afterNextRender, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class Autofocus {
  constructor(private el: ElementRef<HTMLInputElement | HTMLTextAreaElement>) {
    afterNextRender(() => this.el.nativeElement.focus());
  }
}

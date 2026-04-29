import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class Autofocus {
  private el = inject(ElementRef<HTMLInputElement | HTMLTextAreaElement>);
  constructor() {
    afterNextRender(() => this.el.nativeElement.focus());
  }
}

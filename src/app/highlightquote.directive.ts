import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightquote]'
})
export class HighlightquoteDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'grey';
   }

}

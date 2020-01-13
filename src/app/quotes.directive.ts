import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appQuotes]'
})
export class quotesDirective {

    
  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.backgroundColor= 'red';
  }

}
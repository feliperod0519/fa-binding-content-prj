import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputref]'
})
export class InputrefDirective {

  focus= false;

  constructor() { }

  @HostListener('focus')
  onFocus(){
    this.focus = true;
  }

  @HostListener('blur')
  onBlur(){
    this.focus = false;
  }

}

import { Component, OnInit, Input, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputrefDirective } from '../common/inputref.directive';
import { commonCss } from '../common/common.css';
import { defaultThemeCss } from '../common/default-theme.css';

@Component({
  selector: 'app-au-fa-input',
  template:  `

  <i class="icon fa" [ngClass]="classes"></i>
  
  <ng-content select="input"></ng-content>
  
  `,
  styles: [ commonCss, defaultThemeCss ]
})
export class AuFaInputComponent implements OnInit {

  @ContentChild(InputrefDirective)
  input: InputrefDirective = {} as InputrefDirective;

  @Input()
  icon:string='';

  constructor() { }

  ngOnInit(): void {
  }

  @HostBinding('class.input-focus')
  get isInputFocus(){
    return this.input?this.input.focus: false;
  }

  get classes(){
    return 'fa-filmIcon'
  }

}

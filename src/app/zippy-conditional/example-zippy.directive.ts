import { ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appExampleZippy]'
})
export class ExampleZippyDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

  @ContentChild(ExampleZippyDirective) content!: ExampleZippyDirective;

}

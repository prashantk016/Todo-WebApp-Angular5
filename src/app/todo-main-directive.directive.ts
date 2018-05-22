import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[todo-host]'
})
export class TodoMainDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

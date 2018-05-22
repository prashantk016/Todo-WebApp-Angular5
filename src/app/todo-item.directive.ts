import { Directive,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[TodoItem-host]'
})
export class TodoItemDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

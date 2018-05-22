import { Component, OnInit,ComponentFactoryResolver,ViewChild } from '@angular/core';
import { TodoMainDirectiveDirective } from '../todo-main-directive.directive';
import { TodoMainComponent } from '../todo-main/todo-main.component';

@Component({
  selector: 'todo-area',
  templateUrl: './todo-area.component.html',
  styleUrls: ['./todo-area.component.scss'],
  host: {'id': 'todo-area'},
})
export class TodoAreaComponent {
  @ViewChild(TodoMainDirectiveDirective) todoHost: TodoMainDirectiveDirective;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  /**
   * adds a new todo-main component to the todo-area
   */
  addComponent() {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TodoMainComponent);

    let viewContainerRef = this.todoHost.viewContainerRef;

    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance._ref=componentRef;
  }


 
}

import { Component, OnInit,ViewChild,ComponentFactoryResolver } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {TodoItemDirective} from '../todo-item.directive';
import {TodoItemComponent} from '../todo-item/todo-item.component';

@Component({
  selector: 'todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
  
})
export class TodoMainComponent implements OnInit {

  static zValue:number=0;
  public _ref:any;
  date:string;
  mousePosition;
  offset = [0,0];
  isDown = false;
  sanitizer: DomSanitizer;
  @ViewChild(TodoItemDirective) itemhost: TodoItemDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.date=new Date().toLocaleDateString();
   }

  ngOnInit() {
    
  }
/**
 * adds a new todo item component to the todo list
 * with the task value in the text input
 * @param event click event of addItem
 */
  addItem(event) {

    let newItem=event.target.parentNode.parentNode;
    let taskString=newItem.querySelector(".text").value;
   // if(taskString===""){return;}
    newItem.querySelector(".text").value="";

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TodoItemComponent);

    let viewContainerRef = this.itemhost.viewContainerRef;

    let componentRef = viewContainerRef.createComponent(componentFactory);
   
    componentRef.instance._ref=componentRef;
    componentRef.instance.task=taskString.trim();
  }

  close_todo(){
    this._ref.destroy();
  }
  /**
   * brings the selected todo at front
   */
  change_focus(event){
    let todo=event.target;
    while(todo.classList[0]!="todo_main")
      todo=todo.parentNode;

    todo.style.zIndex=TodoMainComponent.zValue++;
 
  }
/**
 * onMouseDown, onMouseUp,onMouseMove 
 * moves the todo around
 */
onMouseDown(event){
this.isDown = true;
this.change_focus(event);
let todo=event.target;
while(todo.classList[0]!="todo_main")
  todo=todo.parentNode;
this.offset = [
    todo.offsetLeft - event.clientX,
    todo.offsetTop - event.clientY
];
   
}

onMouseUp(event){
    this.isDown = false;
}

onMouseMove(event) {
    event.preventDefault();
    if (this.isDown) {
       let mousePosition = {
    
            x : event.clientX,
            y : event.clientY
    
        };
        let todo=event.target;
        while(todo.classList[0]!="todo_main")
          todo=todo.parentNode;
       todo.style.left = (mousePosition.x + this.offset[0]) + 'px';
      todo.style.top  = (mousePosition.y + this.offset[1]) + 'px';
        
    }
}
/**
 * updates the last updated date 
 * of the todo
 */
update_date(){ 
  this.date=new Date().toLocaleDateString();
}

}

  import { Component, OnInit } from '@angular/core';
import { TodoMainComponent} from "../todo-main/todo-main.component"
import { NgIf } from '@angular/common';
  @Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
  })
  export class TodoItemComponent implements OnInit {
    _ref:any;
    task:string;
    constructor() { }

    ngOnInit() {
    }

    /**
     * deletes the todo item from the todo list
     * @param event 
     */
    delete_item(event){
      event.stopPropagation();
      this._ref.destroy();
      
    }
    /**
     * called on checking/unchecking checkbox
     * adds a line-through to the specific todo item 
     * @param event 
     */
    task_state(event){
      let l=event.target.parentNode;

      if(event.target.checked){
        event.target.nextSibling.contentEditable="false";
        l.style.textDecoration="line-through";
      }
      else{
        event.target.nextSibling.contentEditable="true";
        l.style.textDecoration="";
      }
    }
       
  }

  

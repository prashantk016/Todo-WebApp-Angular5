import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TodoAreaComponent } from './todo-area/todo-area.component';
import { TodoMainComponent } from './todo-main/todo-main.component';
import { TodoMainDirectiveDirective } from './todo-main-directive.directive';
import { TodoItemDirective } from './todo-item.directive';
import { TodoItemComponent } from './todo-item/todo-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TodoAreaComponent,
    TodoMainComponent,
    TodoMainDirectiveDirective,
    TodoItemDirective,
    TodoItemComponent
  ],
  entryComponents: [ TodoMainComponent,TodoItemComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

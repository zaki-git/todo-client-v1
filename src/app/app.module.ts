import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './common/test.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetails } from './pages/todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppComponent, TestComponent, TodoListComponent, TodoDetails
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

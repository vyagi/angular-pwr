import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  newTodo = '';
  todos = [];
  itemDeleted(id) {
   this.todoService.delete(id)
    .subscribe(_ => {
      const index = this.todos.findIndex(x => x.id === id);
      this.todos.splice(index, 1);
    });
  }
  itemChanged(item) {
    this.todoService.update(item)
    .subscribe();
  }
  itemAdded() {
    this.todoService.create({
      subject: this.newTodo
    })
    .subscribe(
      response => {
        this.todos.push(response);
        this.newTodo = '';
      }
    );
  }
constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.get()
      .subscribe(response => this.todos = response);
  }

}

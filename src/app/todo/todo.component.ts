import { TodoService } from './../todo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild('todoForm', null) todoForm: NgForm;
  newTodo = {
    subject: '',
    dueDate: null
  };
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
    this.todoService.create(this.newTodo)
    .subscribe(
      response => {
        this.todos.push(response);
        this.newTodo = {
          subject: '',
          dueDate: null
        };
        this.todoForm.reset();
      }
    );
  }
constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.get()
      .subscribe(response => this.todos = response,
        error => {
          alert(error.message);
        });
  }

}

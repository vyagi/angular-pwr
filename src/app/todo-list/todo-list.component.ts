import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos;
  @Output() itemClicked = new EventEmitter<number>();
  @Output() itemChanged = new EventEmitter<any>();

  itemClick(item) {
    this.itemClicked.emit(item.id);
  }
  itemChange(item) {
    this.itemChanged.emit(item);
  }
  ngOnInit() {

  }

}

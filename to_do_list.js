const readline = require('readline-sync');



class Todo {

  static DONE_MARKER = [X];
  static NOT_DONE_MARKER = [];

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    return this.done ? `${Todo.DONE_MARKER} ${this.title}` : `${Todo.NOT_DONE_MARKER} ${this.title}`
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class ToDoList {
  constructor(title) {
    this.title = title;
    this.toDos = [];
  }


}

let list = new TodoList("Today's Todos");
console.log(list); // TodoList { title: "Today's Todos", todos: [] }
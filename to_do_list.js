
class Todo {

  static DONE_MARKER = ['X'];
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
  add(item) {
    if (item instanceof Todo) {
      this.toDos.push(item);
    } else {
      throw new TypeError("can only add Todo objects");
    }
  }
  size() {
    return this.toDos.length;
  }

  first() {
    return this.toDos[0];
  }

  last() {
    return this.toDos[this.toDos.length - 1]
  }

  itemAt(place) {
    this.validateIndex(place);
    return this.toDos[place];
  }

  markDoneAt(position) {
    this.validateIndex(position);
    this.toDos[position].markDone();
  }

  markUndoneAt(position) {
    this.validateIndex(position);
    this.toDos[position].markUndone();
  }

  validateIndex(index) {
    if (!(index in this.toDos)) {
      throw new TypeError(`invalid index: ${index}`);
    }
  }

  shift() {
    this.toDos.shift();
  }
  pop() {
    this.toDos.pop();
  }

  removeAt(index) {
    this.validateIndex(index);
    return this.toDos.splice(index, 1);
  }

  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.toDos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }
}

let list = new ToDoList("Today's Todos");

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");


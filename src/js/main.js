import Todo from './todo.js'
class Main {
  constructor() {
    this._ul = document.getElementById('UL');
    this._todoInput = document.getElementById('todoInput');
    this._addTodoBtn = document.getElementById('addTodo');
    this._addTodoBtn.onclick = this.addTodo.bind(this);

  }

  addTodo() {
    if (!this._todoInput.value){
      alert("Add text...")
    } else{
    var todo = new Todo(this._todoInput.value)
    this._ul.appendChild(todo.li);
    this._todoInput.value=null;
  }
}
};

export default new Main();

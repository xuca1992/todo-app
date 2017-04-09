
class Todo {
  constructor(text) {
    this.text = text;
    this.editMode = false;
    this.li = document.createElement('li');
    this.li.setAttribute("class","list-group-item");
    this._createRemoveBtn();
    this._createTextInput();
    this._createEditBtn();
    this.li.appendChild(this.textInput);
    this.li.appendChild(this.edit);
    this.li.appendChild(this.remove);
}

  _createTextInput() {
    this.textInput = document.createElement('input');
    this.textInput.setAttribute("class","form-control");
    this.textInput.value = this.text;
    this.textInput.disabled = true;
  }

  _createEditBtn() {
    this.edit = document.createElement('button');
    this.edit.setAttribute("class","btn btn-primary");
    this.edit.innerHTML = 'Edit'
    this.edit.onclick = () => {
      if (this.editMode) {
        this.edit.innerHTML = 'Edit'
        this.text = this.textInput.value;
        this.textInput.disabled = true;
        this.editMode = false;
        return;
      }
      this.textInput.disabled = false;
      this.editMode = true;
      this.edit.innerHTML = 'Save'
    }
  }

  _createRemoveBtn() {
    this.remove = document.createElement('button');
    this.remove.setAttribute("class","btn btn-danger");
    this.remove.innerHTML = 'x'
    this.remove.onclick = () => {
    this.li.parentNode.removeChild(this.li);
    }
  }
};

export default Todo;

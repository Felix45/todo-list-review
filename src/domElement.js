var form = document.forms[0];
var addField = form.elements.todo;
var returnIcon = document.querySelector('.fa-level-down');
var clearTodo = document.querySelector('.clear');

const addBookHandler = ({ taskstore }) => {
  if (addField.value !== '') {
    taskstore.addTask(addField.value);
    taskstore.printTodoList();
    form.reset();
  }
};

const removeBookHandler = ({ taskstore }) => {
  taskstore.removeTask(true);
};

export {
  addField, clearTodo, returnIcon, addBookHandler, removeBookHandler,
};
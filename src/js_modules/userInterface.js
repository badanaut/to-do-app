import createTodoItem from './createTodoItem';
import initAddToDoModal from './addToDoUI';

export default class userInterface {
  static loadHomePage() {
    const taskContainer = document.getElementById('task-overview');
    taskContainer.innerHTML = `<div id="task-category">Inbox</div>
    <button id="add-to-do">Add ToDo</button>
    <div id="to-do-container"></div>`;
    initAddToDoModal();
  }

  static addTodoItem(itemName, description, priority) {
    const todoList = []; // to add code that get to do items from html page
    const newTodoItem = createTodoItem(itemName, description, priority);
    todoList.push(newTodoItem);
  }
}

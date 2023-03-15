import createTodoItem from './createTodoItem';

export default class userInterface {
  static loadHomePage() {

  }

  static addTodoItem(itemName, description, priority) {
    const todoList = [];
    const newTodoItem = createTodoItem(itemName, description, priority);
    todoList.push(newTodoItem);
  }
}

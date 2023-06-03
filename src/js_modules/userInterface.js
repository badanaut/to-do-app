import displayToDoItem from "./displayToDoItem.js";
import createTodoItem from "./createTodoItem";
var isThisWeek = require("date-fns/isThisWeek");
const displayToDo = document.querySelector("#task-overview");
const addToDoForm = document.querySelector("#add-todo-form");
const title = document.getElementById("new-todo-title");
const dueDate = document.getElementById("new-todo-date");
const priority = document.getElementById("new-todo-priority");
const inbox = document.getElementById("inbox");
const week = document.getElementById("week");
const month = document.getElementById("month");

let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [
  {
    title: "Learn React",
    dueDate: new Date(2023, 7, 1),
    priority: "high",
    checklist: false,
  },
  {
    title: "Learn Node.js",
    dueDate: new Date(2023, 8, 1),
    priority: "medium",
    checklist: true,
  },
  {
    title: "Find a Web Developer Job",
    dueDate: new Date(2023, 9, 1),
    priority: "low",
    checklist: false,
  },
];

const userInterface = () => {
  const displayToDos = () => {
    displayToDo.innerHTML = `
        <th>Title</th>
        <th>Due Date</th>
        <th>Status</th>
        <th>Priority</th>`;

    toDoList.forEach((item, index) => {
      displayToDoItem(item, index);
    });
  };

  return {
    displayToDos,
  };
};

addToDoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newToDoItem = createTodoItem(
    title.value,
    new Date(dueDate.value),
    priority.value,
    false
  );
  toDoList.push(newToDoItem);
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  title.value = "";
  dueDate.value = "";
  priority.value = "low";
  userInterface().displayToDos();
});

week.addEventListener("click", (event) => {
  inbox.classList.remove("selected-filter");
  week.classList.add("selected-filter");
  month.classList.remove("selected-filter");
  const diplayedToDo = toDoList.filter((todo) => isThisWeek(todo.dueDate));
});
month.addEventListener("click", (event) => {
  inbox.classList.remove("selected-filter");
  week.classList.remove("selected-filter");
  month.classList.add("selected-filter");
});
inbox.addEventListener("click", (event) => {
  inbox.classList.add("selected-filter");
  week.classList.remove("selected-filter");
  month.classList.remove("selected-filter");
});

export default userInterface;
export { toDoList };

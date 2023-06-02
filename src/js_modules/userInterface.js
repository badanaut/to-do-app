import displayToDoItem from "./displayToDoItem";
import createTodoItem from "./createTodoItem";
const displayToDo = document.querySelector("#task-overview");
const addToDoForm = document.querySelector("#add-todo-form");
const title = document.getElementById("new-todo-title");
const dueDate = document.getElementById("new-todo-date");
const priority = document.getElementById("new-todo-priority");
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

    toDoList.forEach((item) => {
      displayToDoItem(item);
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
  priority.value = "high";
  userInterface().displayToDos();
});

export default userInterface;

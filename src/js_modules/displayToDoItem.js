import { format } from "date-fns";
import { toDoList } from "./userInterface.js";
const displayToDo = document.querySelector("#task-overview");

const displayToDoItem = (item, index) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${item.title}</td>
        <td>${format(new Date(item.dueDate), "yyyy-MM-dd")}</td>
        <td>
          <input type="checkbox" ${item.checklist ? "checked" : ""} />
        </td>
        <td>
          <select>
            <option value="high" ${
              item.priority === "high" ? "selected" : ""
            }>High</option>
            <option value="medium" ${
              item.priority === "medium" ? "selected" : ""
            }>Medium</option>
            <option value="low" ${
              item.priority === "low" ? "selected" : ""
            }>Low</option>
          </select>
        </td>
        <td><button type="button" class="delete-btn">Delete</button></td>
      `;
  displayToDo.append(tr);

  const checkbox = tr.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", () => {
    item.checklist = checkbox.checked;
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  });

  const itemPriority = tr.querySelector("select");
  itemPriority.addEventListener("change", () => {
    item.priority = itemPriority.value;
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  });

  const deleteBtn = tr.querySelector('button[type="button"]');
  deleteBtn.addEventListener("click", () => {
    toDoList.splice(index, 1);
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    displayToDo.innerHTML = `<th>Title</th>
        <th>Due Date</th>
        <th>Status</th>
        <th>Priority</th>`;
    toDoList.forEach((item, index) => {
      displayToDoItem(item, index);
    });
  });
};

export default displayToDoItem;

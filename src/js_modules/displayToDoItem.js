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
};

export default displayToDoItem;

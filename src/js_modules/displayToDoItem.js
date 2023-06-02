const displayToDo = document.querySelector("#task-overview");

const displayToDoItem = (item) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${item.title}</td>
        <td>${item.dueDate.toISOString().split("T")[0]}</td>
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
};

export default displayToDoItem;

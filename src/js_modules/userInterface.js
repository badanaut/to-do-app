import { compareAsc, format } from "date-fns";
const displayToDo = document.querySelector("#task-overview");

const userInterface = () => {
  const toDoList = [
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

  const loadHomePage = () => {
    toDoList.forEach((item) => {
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
    });
  };

  return {
    loadHomePage,
  };
};

export default userInterface;

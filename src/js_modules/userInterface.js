const displayToDo = document.querySelector("#task-overview");

const userInterface = () => {
  const toDoList = [
    {
      title: "1st To do",
      dueDate: "2023-06-01",
      priority: "high",
      checklist: false,
    },
    {
      title: "2nd To do",
      dueDate: "2023-06-02",
      priority: "medium",
      checklist: true,
    },
    {
      title: "3rd To do",
      dueDate: "2023-06-03",
      priority: "low",
      checklist: false,
    },
  ];

  const loadHomePage = () => {
    toDoList.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.title}</td>
        <td>${item.dueDate}</td>
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

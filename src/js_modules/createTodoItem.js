const createTodoItem = (title, dueDate, priority, checklist) => {
  return {
    title,
    dueDate,
    priority,
    checklist,
  };
};

export default createTodoItem;

export default function createTodoItem(itemName, description, priority) {
  let status = 'Incomplete';

  return {
    getItemName() {
      return itemName;
    },
    getDescription() {
      return description;
    },
    getPriority() {
      return priority;
    },
    getStatus() {
      return status;
    },
    setStatus(newStatus) {
      status = newStatus;
    },
  };
}

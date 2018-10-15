let taskId = 0

class Task {
  // your code here
  constructor(listId, description, priority) {
    this.id = ++taskId
    this.listId = listId
    this.description = description
    this.priority = priority
    store.tasks.push(this)
  }
}

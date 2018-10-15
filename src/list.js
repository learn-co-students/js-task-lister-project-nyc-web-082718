let listId = 0

class List {
  // your code here
  constructor(title) {
    this.id = ++listId
    this.title = title
    store.lists.push(this)
  }
}

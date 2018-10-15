document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const createListForm = document.getElementById("create-list-form")
  const newListTitle = document.getElementById("new-list-title")
  const appContent = document.getElementById('app-content')

  createListForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const listText = newListTitle.value
    const newList = document.createElement('form')
    const newListObj = new List(listText)
    newList.innerText = newListObj.title
    const newTask = document.createElement('div')
    newTask.innerText = listText
    const btn = document.createElement('button')
    btn.innerText = 'Delete me!'
    newTask.appendChild(btn)
    const taskList = document.getElementById('lists')
    taskList.appendChild(newList)
    appContent.appendChild(newList)
    event.target.reset()


  })

}); //end of function//

let store = {lists: [],tasks: []}

//
// document.addEventListener(“DOMContentLoaded”, () => {
//  const taskList = new TaskList();
//  const TaskDescription = document.getElementById(‘new-task-description’);
//  const createTaskForm = document.getElementById(‘create-task-form’);
//  const tasks = document.getElementById(‘tasks’);
//
//  // createTaskForm.addEventListener(‘submit’, function(event) {
//  //   event.preventDefault();
//  //   const taskValue = TaskDescription.value
//    const newTask = document.createElement(‘li’);
//    const btn = document.createElement(“button”)
//
//    newTask.innerText = taskValue
//    newTask.appendChild(btn)
//    tasks.appendChild(newTask)
//    event.target.reset()
//
//    btn.innerText = ‘X’
//
//    btn.addEventListener(‘click’, (event) => {
//      event.target.parentNode.remove()
//    })
//  })
//
// }); //end of class
//
//
//

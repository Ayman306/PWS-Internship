const text=document.getElementById("text");
const addTask=document.getElementById("task-submit");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox=document.getElementById("listBox");
const saveInd=document.getElementById("saveIndex");
// array to store the data 
let todoArray=[]; 
addTask.addEventListener("click", (e) => {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
    todoArray.push(text.value);
    text.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
});
function displayTodo() {
  let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
  let htmlCode = "";
    todoArray.forEach((list, ind) => {
      htmlCode += `<div class='listBox'>      
      <p id="the-task">${list}</p>
      <button onclick='edit(${ind})' id='task_edit'>Edit</button>
      <button onclick='deleteTodo(${ind})' id='tasks_delete'>Delete</button>
  </div>`;
    });
    listBox.innerHTML=htmlCode;
}

function deleteTodo(ind) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  todoArray.splice(ind, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
 }

 function edit(ind) {
  saveInd.value = ind;
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  text.value = todoArray[ind];
  addTask.style.display = "none";
  saveTaskButton.style.display = "inline-block";
 }

 saveTaskButton.addEventListener("click", () => {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  let id = saveInd.value;
  todoArray[id] = text.value;
  addTask.style.display = "block";
  saveTaskButton.style.display = "none";
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
 });
 displayTodo();
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const deleted = document.querySelector("#delete");
const button = document.querySelector("button");

const todos = JSON.parse(localStorage.getItem("list_todos")) || [];

// add todos array to DOM
function renderTodos() {
  ul.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const pos = todos.indexOf(todo);
    li.setAttribute("onclick", "deleteTodo(" + pos + ")");
    li.innerHTML = `<li>${todo}<a href="#" id="delete">X</a></li>`;
    ul.appendChild(li);
  });
  saveToStorage();
}

renderTodos();

// create a new element on input.

function addTodo() {
  const value = input.value;
  const newTodo = value.charAt(0).toUpperCase() + value.slice(1);
  todos.push(newTodo);
  input.value = "";
  renderTodos();
  saveToStorage();
}

button.addEventListener("click", (e) => {
  if (input.value === "") {
    alert("Must add a value");
  } else {
    addTodo();
  }
});

// delete elements
function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
}

// save to storage
function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}

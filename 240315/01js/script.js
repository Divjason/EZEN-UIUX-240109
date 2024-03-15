const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

const getLocal = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    const newDiv = document.createElement("div");
    newDiv.className = "todo";

    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.className = "todo-content";

    const midDiv = document.createElement("div");
    midDiv.className = "buttons";

    const completeButton = document.createElement("button");
    completeButton.innerText = "완료";
    completeButton.className = "complete-button";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";
    deleteButton.className = "delete-button";

    midDiv.append(completeButton, deleteButton);
    newDiv.append(newTodo, midDiv);
    todoList.appendChild(newDiv);
  });
};

const saveToLocal = (todo) => {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();
  if (todoInput.value !== "") {
    const newDiv = document.createElement("div");
    newDiv.className = "todo";

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.className = "todo-content";

    const midDiv = document.createElement("div");
    midDiv.className = "buttons";

    const completeButton = document.createElement("button");
    completeButton.innerText = "완료";
    completeButton.className = "complete-button";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";
    deleteButton.className = "delete-button";

    midDiv.append(completeButton, deleteButton);
    newDiv.append(newTodo, midDiv);
    todoList.appendChild(newDiv);
    saveToLocal(todoInput.value);
    todoInput.value = "";
  }
};

const removeLocal = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const index = todos.indexOf(todo.children[0].innerText);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const manageTodo = (e) => {
  let whichButton = e.target.classList[0];
  if (whichButton === "complete-button") {
    let todo = e.target.parentElement.parentElement;
    console.log(todo.children[0]);
    todo.children[0].classList.toggle("complete");
  } else if (whichButton === "delete-button") {
    let todo = e.target.parentElement.parentElement;
    removeLocal(todo);
    todo.remove();
  }
};

document.addEventListener("DOMContentLoaded", getLocal);
addButton.addEventListener("submit", addTodo);
todoList.addEventListener("click", manageTodo);

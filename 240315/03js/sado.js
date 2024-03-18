const form = document.querySelector("form");
const blocks = document.querySelectorAll(".list");

let from,
  to = undefined;

let todoList = [],
  doingList = [],
  doneList = [];

const lists = {
  todo: todoList,
  doing: doingList,
  done: doneList,
};

const saveList = (listId) => {
  localStorage.setItem(listId, JSON.stringify(lists[listId]));
};

const dragstart = (e) => {
  from = e.target.parentElement.id;
};

const dragover = (e) => {
  const { id: targetId } = e.target;
  const listIds = Object.keys(lists);

  console.log(listIds, targetId);

  if (listIds.includes(targetId)) {
    to = targetId;
  }
};

const dragend = (e) => {
  const { id } = e.target;

  e.target.remove();
  lists[from] = lists[from].filter((todo) => {
    if (todo.id !== id) {
      return todo;
    } else {
      createElement(to, todo);
    }
  });

  saveList(from);
  saveList(to);
};

const createElement = (listId, todo) => {
  const list = document.querySelector(#${listId});
  const item = document.createElement("div");

  item.id = todo.id;
  item.innerText = todo.text;
  item.className = "item";
  item.draggable = true;

  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
  // item.addEventListener("contextmenu", removeTodo);

  list.appendChild(item);
  lists[listId].push(todo);
};

const createTodo = (e) => {
  e.preventDefault();

  const input = document.querySelector("input[type='text']");

  const id = Date.now();
  // const id = uuidv4();

  const newTodo = {
    id,
    text: input.value,
  };

  createElement("todo", newTodo);
  input.value = "";
  saveList("todo");
};

const loadList = () => {
  const userTodoList = JSON.parse(localStorage.getItem("todo"));
  const userDoingList = JSON.parse(localStorage.getItem("doing"));
  const userDoneList = JSON.parse(localStorage.getItem("done"));

  if (userTodoList) {
    userTodoList.forEach((todo) => {
      createElement("todo", todo);
    });
  }

  if (userDoingList) {
    userDoingList.forEach((todo) => {
      createElement("doing", todo);
    });
  }

  if (userDoneList) {
    userDoneList.forEach((todo) => {
      createElement("done", todo);
    });
  }
};

loadList();

form.addEventListener("submit", createTodo);
blocks.forEach((block) => {
  block.addEventListener("dragover", dragover);
});

import { todoApi } from "./todoApis.js";

/*
Given an Api, implement a todo app(features includes Add a todo, Change a todo Status, Delete Todo) in Vanilla JavaScript. 
FYI: You can add some css styles you want.
*/

//implement your app here
const input = document.querySelector(".todolist__input");
const addBtn = document.querySelector(".btn-add");

//Add a new todo item
addBtn.addEventListener("click", function () {
  const value = input.value;
  if (value) {
    addTodoItem(value);
    input.value = "";
  }
});

function addTodoItem(item) {
  const orderList = document.querySelector(".todolist__content");

  const listItem = document.createElement("li");
  listItem.classList.add("todolist__items");
  listItem.textContent = item;

  //Change todo status
  listItem.ondblclick = function (event) {
    const toggle = event.target;
    toggle.classList.add("line_through");
  };

  const delBtn = document.createElement("button");
  delBtn.classList.add("btn", "btn-delete");
  delBtn.textContent = "Delete";

  //Remove an item from todo list
  delBtn.addEventListener("click", deleteItem);

  listItem.appendChild(delBtn);
  orderList.appendChild(listItem);
}

function deleteItem() {
  const items = this.parentNode;
  const listItems = items.parentNode;

  listItems.removeChild(items);
}

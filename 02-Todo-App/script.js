const input = document.querySelector("#input");
const add = document.querySelector("#add");
const list = document.querySelector("#list");
const cancel = document.createElement("input");
cancel.setAttribute("value", "Delete");
cancel.setAttribute("class", "del");

const addListElement = () => {
  const li = document.createElement("li");

  li.setAttribute("class", "list-item");
  cancel.setAttribute("type", "button");

  li.innerHTML = input.value;
  list.appendChild(li);
  li.appendChild(cancel);
  input.value = "";
};

const removeListElement = (e) => {
  e.parentElement.remove();
};

add.addEventListener("click", addListElement);

cancel.addEventListener("click", removeListElement);

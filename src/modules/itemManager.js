import { createListItem, toggleForm } from "./utils";

const title = document.getElementById("title");
const list = document.getElementById("list");
const desc = document.getElementById("desc");

const add = () => {
  const listItem = createListItem(title, desc);
  list.appendChild(listItem);
  toggleForm();
  title.value = "";
  desc.value = "";
};

export { add };

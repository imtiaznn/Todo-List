import { add } from "./modules/itemManager";
import { toggleForm } from "./modules/utils";
import "./styles.css";

const addButton = document.getElementById("add-button");
const addItemButton = document.getElementById("add-task-button");
const cancelButton = document.getElementById("cancel-button");

const form = document.getElementById("task-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

addButton.addEventListener("click", add);
addItemButton.addEventListener("click", toggleForm);
cancelButton.addEventListener("click", toggleForm);

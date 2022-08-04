import { add, addItem, cancel } from "./itemManager";
import "./styles.css";

const addButton = document.getElementById("add-button");
const addItemButton = document.getElementById("add-task-button");
const cancelButton = document.getElementById("cancel-button");

addButton.addEventListener("click", add);
addItemButton.addEventListener("click", addItem);
cancelButton.addEventListener("click", cancel);
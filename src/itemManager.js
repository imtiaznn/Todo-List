const add = () => {
  const list = document.getElementById("list");
  const listItem = document.createElement("li");

  list.append(listItem);
};

const cancel = () => {
  const addItemButton = document.getElementById("add-task-button");
  const form = document.getElementById("task-form-div");

  if (form.classList.contains("show")) {
    form.classList.remove("show")
    form.classList.add("hide")

    addItemButton.classList.remove("hide")
  }
};

const addItem = () => {
  const addItemButton = document.getElementById("add-task-button");
  const form = document.getElementById("task-form-div");

  if (!form.classList.contains("show")) {
    form.classList.remove("hide");
    form.classList.add("show");

    addItemButton.classList.add("hide");
  }
};

export { add, addItem, cancel };

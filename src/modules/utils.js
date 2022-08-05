const addItemButton = document.getElementById("add-task-button");
const form = document.getElementById("task-form-div");

const toggleForm = () => {
  if (form.classList.contains("hide")) {
    form.classList.remove("hide");
    form.classList.add("show");

    addItemButton.classList.add("hide");
  } else {
    form.classList.remove("show");
    form.classList.add("hide");

    addItemButton.classList.remove("hide");
  }
};

const createListItem = (title, desc) => {
  const listItem = document.createElement("div");
  const listTitle = document.createElement("p");
  const listDesc = document.createElement("p");

  listItem.classList.add("list-item");
  listTitle.classList.add("list-title");
  listDesc.classList.add("list-desc");

  listTitle.append(document.createTextNode(title.value));
  listDesc.append(document.createTextNode(desc.value));

  listItem.appendChild(listTitle);
  listItem.appendChild(listDesc);

  return listItem;
};

export { toggleForm, createListItem };

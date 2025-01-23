const textBox = document.querySelector(".textBox");
const listItems = document.querySelector(".listItems");
const addBtn = document.querySelector(".addBtn");
const errorText = document.querySelector(".errorText");

addBtn.addEventListener("click", () => addItem());

textBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

function addItem() {
  const listItem = document.createElement("li");
  listItem.classList.add(
    "mt-3",
    "pb-2",
    "pl-2",
    "border-b-2",
    "border-gray-800",
    "flex",
    "justify-between"
  );

  const task = document.createElement("div");
  task.textContent = textBox.value.trim();
  task.classList.add("text-white");

  const actionBtns = document.createElement("div");
  actionBtns.classList.add("flex", "gap-2", "text-pink-600", "pt-3");

  const doneBtn = document.createElement("i");
  doneBtn.className = "fa-regular fa-circle-check fa-lg cursor-pointer";
  doneBtn.addEventListener("click", () => {
    task.classList.toggle("line-through");
  });

  const editBtn = document.createElement("i");
  editBtn.className = "fa-solid fa-pen-to-square fa-lg cursor-pointer";
  editBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = task.textContent;
    input.classList.add("bg-gray-700", "text-white", "w-full", "mr-6");
    listItem.replaceChild(input, task);
    input.focus();

    input.addEventListener("blur", () => {
      const newText = input.value.trim();
      if (newText) {
        task.textContent = newText;
      }
      listItem.replaceChild(task, input);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        input.blur();
      }
    });
  });

  const deleteBtn = document.createElement("i");
  deleteBtn.className = "fa-solid fa-trash fa-lg cursor-pointer";
  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });

  actionBtns.appendChild(doneBtn);
  actionBtns.appendChild(editBtn);
  actionBtns.appendChild(deleteBtn);

  if (task.textContent) {
    errorText.classList.add("hidden");
    listItem.appendChild(task);
    listItem.appendChild(actionBtns);
    listItems.appendChild(listItem);

    textBox.value = "";
  } else {
    errorText.classList.remove("hidden");
  }
}

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
  const task = document.createElement("li");
  task.textContent = textBox.value.trim();
  task.classList.add(
    "text-white",
    "mt-3",
    "pb-2",
    "pl-2",
    "border-b-2",
    "border-gray-800"
  );
  if (task.textContent) {
    errorText.classList.add("hidden");
    listItems.appendChild(task);
    textBox.value = "";
  } else {
    errorText.classList.remove("hidden");
  }
}

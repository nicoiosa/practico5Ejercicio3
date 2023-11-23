const formTask = document.querySelector("#formTask");
const mainBtn = document.querySelector("btn");
const list = document.querySelector("ul");
const dltBtns = [];

function addTask(e) {
  e.preventDefault();
  const inputTask = document.getElementById("inputTask").value;
  const task = document.createElement("li");
  const dltBtn = document.createElement("button");
  dltBtn.innerHTML = "X";
  dltBtn.className = "btn badge bg-danger rounded-pill";
  task.innerHTML = inputTask;
  task.className = "list-group-item d-flex justify-content-between";
  list.appendChild(task);
  task.appendChild(dltBtn);
  dltBtns.push(dltBtn);
  formTask.reset();
}

function deleteTask(e) {
  const btn = e.target;
  const task = btn.parentElement;
  task.remove()
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("bg-danger")) {
    deleteTask(e);
  }
});

formTask.addEventListener("submit", addTask);

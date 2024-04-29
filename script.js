let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");

function addTask(text) {
  let divTask = document.createElement("div");
  let task = document.createElement("p");
  let buttonRemove = document.createElement("button");

  buttonRemove.classList.add("removeBtn");
  divTask.classList.add("divTask");
  buttonRemove.innerHTML = "REMOVE";

  task.innerHTML = text;

  divTask.appendChild(task);
  divTask.appendChild(buttonRemove);
  list.appendChild(divTask);

  buttonRemove.addEventListener("click", function() {
    if (confirm("Are you sure you want to delete the task?")) {
      list.removeChild(divTask);
      updateLocalStorage();
    }
  });
}

function updateLocalStorage() {
  let tasks = [];
  list.querySelectorAll("p").forEach(function(task) {
    tasks.push(task.innerHTML);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener("click", function() {
  let text = document.getElementById("text").value;
  if (text !== "") {
    addTask(text);
    updateLocalStorage();
  } else {
    alert("Fill the camp!");
  }
});

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    tasks.forEach(function(task) {
      addTask(task);
    });
  }
}

loadTasks();

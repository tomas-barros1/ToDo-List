let addBtn = document.getElementById("addBtn")
let list = document.getElementById("list")

addBtn.addEventListener("click", function() {
  let text = document.getElementById("text").value

  if (text !== "") {
    let divTask = document.createElement("div")
    let task = document.createElement("p")
    let buttonRemove = document.createElement("button")

    buttonRemove.classList.add("removeBtn")
    divTask.classList.add("divTask")
    buttonRemove.innerHTML = "REMOVE"

    task.innerHTML = text
  
    divTask.appendChild(task)
    divTask.appendChild(buttonRemove)
    list.appendChild(divTask)

    buttonRemove.addEventListener("click", function() {
      if (confirm("Are you sure you want to delete the task?"))
        list.removeChild(divTask)
    })
  } else {
    alert("Fill the camp!")
  }
})

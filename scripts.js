const btnAddTask = document.querySelector(".add-img")

function newTask() {
    let inputCreate = document.querySelector("#input-create");

    if(!inputCreate.value) {
        alert("Digite alguma tarefa.");
    }
}

btnAddTask.addEventListener("click", newTask);


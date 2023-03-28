let dataBase = []

const getDataBase = () => JSON.parse(localStorage.getItem ('input-create')) ?? [];
const setDataBase = (dataBase) => localStorage.setItem ('input-create', JSON.stringify(dataBase));

function createTask(task, status, indice = "") {
    const item = document.createElement("ul");
    item.classList.add("ul-tasks");
    item.innerHTML = `
      <label class="label-list">
        <li class="li-tasks">
          <input type="checkbox" id="check-li" name="check-li" ${status} data-indice=${indice}>
          <img id="check-img" src="./assets/icons/icon-check.svg">
          <span class="text-task ${status === "checked" ? "checked" : ""}">${task}</span>
          <input type="image" class="delete-img" src="./assets/icons/icon-cross.svg"/>
        </li>
      </label>
    `;
    const checkbox = item.querySelector("input[type='checkbox']");
    const span = item.querySelector(".text-task");
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        span.classList.add("checked");
      } else {
        span.classList.remove("checked");
      }
    });
    document.querySelector(".tasks").appendChild(item);
  }

let myFooter = null;

function createFooter() {
    const dataBase = getDataBase();
    if (dataBase.length > 0) {
        myFooter = document.createElement("div");
        myFooter.classList.add("footer-tasks");
        myFooter.innerHTML = `
            <div class="ft-left">
                <p><span id="items-left">${dataBase.length}</span> items left</p>
            </div>
    
            <div class="ft-mid">
                <span id="all-span">All</span>
                <span id="active-span">Active</span>
                <span id="completed-span">Completed</span>
            </div>
    
            <div class="ft-right">
                <p id="clear">Clear Completed</p>
            </div>
        `;

        document.querySelector(".tasks").appendChild(myFooter);
    }
}

const clearTaks = () => {
    const tasksList = document.querySelector(".tasks");
    while(tasksList.firstChild) {
        tasksList.removeChild(tasksList.lastChild);
    }
}

const updatePage = () => {
    clearTaks();
    const dataBase = getDataBase();
    dataBase.forEach((item, indice) => createTask(item.task, item.status, indice));
    createFooter();
}

const addTaskEnter = (event) => {
    const keyInput = event.key;
    const text = event.target.value;
    if(keyInput === "Enter") {
        event.preventDefault();
        const dataBase = getDataBase();
        dataBase.push({"task": text, "status": ""})
        setDataBase(dataBase);
        updatePage();
        event.target.value = "";
    }
}

const removeItem = (indice) => {
    const dataBase = getDataBase();
    dataBase.splice (parseInt(indice), 1);
    setDataBase(dataBase);
    updatePage();
}

const clickItem = (event) => {
    const element = event.target;
    console.log(element.type)
    if (element.type === "image") {
        const indice = element.dataset.indice;
        removeItem(indice);
    }
}


document.querySelector("#input-create").addEventListener("keypress", addTaskEnter);
document.querySelector(".tasks").addEventListener("click", clickItem);

updatePage();






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
          updateItemsLeft(-1);
        } else {
          span.classList.remove("checked");
          updateItemsLeft(1);
        }
    });
    document.querySelector(".tasks").appendChild(item);
}

function updateItemsLeft(change) {
    const itemsLeft = document.querySelector("#items-left");
    const currentCount = parseInt(itemsLeft.innerText);
    itemsLeft.innerText = currentCount + change;
}

let myFooter = null;

function createFooter() {
    const dataBase = getDataBase();
    if (dataBase.length > 0) {
        myFooter = document.createElement("div");
        myFooter.classList.add("footer-tasks");
        myFooter.innerHTML = `
            <div class="ft-left">
                <p><span id="items-left">${dataBase.filter(item => !item.status).length}</span> items left</p>
            </div>
    
            <div class="ft-right">
                <button id="clear">Clear Completed</button>
            </div>
        `;

        document.querySelector(".tasks").appendChild(myFooter);
    }
}

const clearTask = () => {
    const tasksList = document.querySelector(".tasks");
    while(tasksList.firstChild) {
        tasksList.removeChild(tasksList.lastChild);
    }
}

const updatePage = () => {
    clearTask();
    const dataBase = getDataBase();
    dataBase.forEach((item, indice) => createTask(item.task, item.status, indice));
    createFooter();
    updateItemsLeft(0);
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

const clearCompleted = () => {
    const dataBase = getDataBase();
    const newDataBase = dataBase.filter(item => item.status !== "checked");
    setDataBase(newDataBase);
    updatePage();
}

const updateItem = (indice) => {
    const dataBase = getDataBase();
    dataBase[indice].status = dataBase[indice].status === '' ? 'checked' : '';
    setDataBase(dataBase);
    updatePage();
}

const clickItem = (event) => {
    const element = event.target;
    console.log(element.type)
    if (element.type === "image") {
        const indice = element.dataset.indice;
        removeItem(indice);
    } else if (element.type === 'checkbox') {
        const indice = element.dataset.indice;
        updateItem(indice);
    }
    if (element.id === "clear") {
        clearCompleted();
    }
}


document.querySelector("#input-create").addEventListener("keypress", addTaskEnter);
document.querySelector(".tasks").addEventListener("click", clickItem);

updatePage();

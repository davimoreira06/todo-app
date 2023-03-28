/* <ul id="tasks-list">
                <li class="li-tasks">
                    <input type="checkbox" id="check-li" name="check-li">
                    <img id="check-img" src="./assets/icons/icon-check.svg">
                    <span class="text-task">Teste</span>
                    <img class="delete-img" src="./assets/icons/icon-cross.svg">
                </li>
            </ul>

            <div class="footer-tasks">  

                <div class="ft-left">
                    <p><span id="items-left">N</span> items left</p>
                </div>

                <div class="ft-mid">
                    <span id="all-span">All</span>
                    <span id="active-span">Active</span>
                    <span id="completed-span">Completed</span>
                </div>

                <div class="ft-right">
                    <p id="clear">Clear Completed</p>
                </div>
            </div> */

const createTask = (task) => {
    const item = document.createElement("ul");
    item.classList.add("ul-tasks");
    item.innerHTML = `<li class="li-tasks">
    <input type="checkbox" id="check-li" name="check-li">
    <img id="check-img" src="./assets/icons/icon-check.svg">
    <span class="text-task">${task}</span>
    <img class="delete-img" src="./assets/icons/icon-cross.svg">
    </li>`

    document.querySelector(".tasks").appendChild(item);

}
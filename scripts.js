const btnAddTask = document.querySelector(".add-img")
const tasksList = document.querySelector("#tasks-list");


function newTask(event) {
    event.preventDefault();


    const inputCreate = document.querySelector("#input-create");
    const value = inputCreate.value;
    
    if(value == "") return

    tasksList.innerHTML += `<li style= "position: relative;
    margin-left: auto;
    margin-right: auto;
    height: 3.5rem;
    margin-top: 0rem;
    border-bottom: 0.1rem solid hsla(233, 11%, 52%, 0.416);"><input type="checkbox" id="check-li" name="check-li" style= "margin-top: 1.3rem;
    margin-left: 1.8rem; #check-li:before {  
        content: "";
        width: 1.5rem;
        height: 1.5rem;
        background-color:  hsl(235, 24%, 19%);
        border: 1px solid hsl(233, 14%, 35%);
        border-radius: 3rem;
        display: inline-block;
        position: relative;
        right: 0.5rem;
        bottom: 0.4rem;
    }
    
    #check-li:checked:before {
        width: 1.5rem;
        height: 1.5rem;
        background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    }">
    <img id="check-img" src="./assets/icons/icon-check.svg" style= "display: none;
    position: relative;
    right: 1.15rem;
    bottom: 0.1rem; #check-img.active {
        display: inline;
    }"><span style= "position: absolute;
    top: 1.3rem;
    left: 3.2rem;
    font-size: 1.1rem;
    color: hsl(234, 39%, 85%);
    margin-left: 0.8rem;">${inputCreate.value}</span><img class="delete-img" src="./assets/icons/icon-cross.svg" style= " float: right;
    margin-top: 1.1rem;
    margin-right: 1.8rem;
    cursor: pointer;">`

    inputCreate.value = "";


}



/*
function newTask() {

   
        let inputCreate = document.querySelector("#input-create").value;
        let list = document.querySelector("#tasks-list").innerHTML;

        list += "<li><input type='checkbox' id='check-li' name='check-li'>" + 
        "<img id='check-img' src='./assets/icons/icon-check.svg'><span>" + inputCreate + "</span></li>";

        document.querySelector("#tasks-list").innerHTML = list;

        document.querySelector("#input-create").value = null;
    
}*/

btnAddTask.addEventListener("click", newTask);

const check = document.querySelector("#check-li");

function toggleCheck() {
    const checkImg = document.querySelector("#check-img");
    checkImg.classList.toggle("active");
}

check.addEventListener("click", toggleCheck);


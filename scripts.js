const form = document.querySelector("form");
const ul = document.querySelector("ul");
const inputCreate = document.getElementById("input-create")


inputCreate.addEventListener("keypress", inserirItem);



/*
function taskLi(event) {
    event.preventDefault();
    const inputCreate = form.querySelector("#input-create");
    const value = inputCreate.value;
    const li = document.createElement("li");
    
    li.textContent = value;

    ul.appendChild(li);
}*/

const inserirItem = (evento) => {
    const tecla = evento.key;
    if (tecla === 'Enter'){
        evento.preventDefault();
        const inputCreate = form.querySelector("#input-create");
        const value = inputCreate.value;
        const li = document.createElement("li");
    
        li.textContent = value;

        ul.appendChild(li);
    }
}
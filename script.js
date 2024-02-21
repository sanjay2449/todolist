const userInput = document.getElementById("inputText");
const btn = document.getElementById("btn");
const listContainer = document.getElementById("list-container");

function add() {
    if (userInput.value === "") {
        alert("Write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = userInput.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    userInput.value = "";
    saveData();
}

listContainer.addEventListener("click" ,function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
            }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
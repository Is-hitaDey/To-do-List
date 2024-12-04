const input1 = document.getElementById("title");
const listContainer = document.getElementById("tasks");

function addtask() {
    if (input1.value === '') {
        alert("You must write Something!!");
    } else {
        let li = document.createElement("li");
        let titlec = title.value;
        let descc = desc.value;
        li.innerHTML = `
        <h1> ${titlec} </h1> <br>
        <p> ${descc} </p>
        `
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);

        span.addEventListener('click', function () {
            li.remove();
            saveData();
        });
    }
    input1.value = "";
    desc.value = "";
    saveData()
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() { 
    listContainer.innerHTML = localStorage.getItem("data"); 
    const spans = listContainer.querySelectorAll("span");
    spans.forEach(span => { 
        span.addEventListener('click', function () {
            span.parentElement.remove(); 
            saveData(); 
        });
     });
 } 

 document.addEventListener("DOMContentLoaded", showTask);

var form = document.getElementsByClassName("msgCreateObject-body")[0];
var container = document.getElementsByClassName("container")[0];




function displayCreateObjectForm() {
    container.style.opacity = "0.3";
    form.style.display = "block";
}

function hiddenCreateObjectForm() {
    container.style.opacity = "1.0";
    form.style.display = "none";
}


///////////////////////////

var ul = document.getElementsByClassName("main-navbar-filters")[0];

// Если json'a нет, то создать с пустым массивом.
if (!localStorage["objects"]) {
    localStorage.setItem("objects", `[]`);
    var Data = getObjects();
} else {
    var Data = getObjects();
}

for (var i = 0; i < Data.length; i++) {
    let li = document.createElement("li");
    li.classList.add("listObject")
    ul.appendChild(li);
    let title = Data[i].title;

    let div = document.createElement("div");
    li.style.justifyContent="flex-end";
    li.appendChild(div);

    let icon = document.createElement("i");
    icon.classList.add("fa");  
    icon.classList.add("fa-trash");
    icon.classList.add("editObject");
    icon.addEventListener("click", deleteElement.bind(null, title));
    div.appendChild(icon);

    let titleP = document.createElement("p");
    titleP.innerText = title;
    li.appendChild(titleP);
}

function addElement() {

    displayCreateObjectForm();

    let inputName = document.getElementById("objectName");
    let title = inputName.value;

    //let title = prompt("title?");

    Data.push({ title });
    uploadObjects();

    let li = document.createElement("li");
    li.classList.add("listObject")
    ul.appendChild(li);

    let div = document.createElement("div");
    li.style.justifyContent = "space-between";
    li.appendChild(div);

    let icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-trash");
    icon.classList.add("editObject");
    icon.style.display = "block";
    icon.addEventListener("click", deleteElement.bind(null, title));
    div.appendChild(icon);

    let titleP = document.createElement("p");
    titleP.innerText = title;
    li.appendChild(titleP);

    hiddenCreateObjectForm();
}

function deleteElement(title, event) {
    let li = event.target.parentElement.parentElement;
    li.style.display = "none";

    Data = Data.filter(each => each.title !== title);
    uploadObjects();
}

function getObjects() {
    let jsonText = localStorage["objects"];
    console.log(jsonText);
    return JSON.parse(jsonText);
}

function uploadObjects() {
    localStorage.setItem("objects", JSON.stringify(Data));
}
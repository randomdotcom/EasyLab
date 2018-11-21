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

function createObject() {
    let inputName = document.getElementById("objectName");
    let objectName = inputName.value;
    if (objectName != '') {
        let UL = document.getElementsByClassName("main-navbar-filters")[0];
        let exitingObject = document.getElementsByClassName("listObject")[2];
        let newObject = exitingObject.cloneNode(true);
        
        newObject.childNodes[1].innerHTML = objectName;
        newObject.childNodes[0].childNodes[0].onclick = function () { deleteObject() };
        
        UL.appendChild(newObject);
    }
    hiddenCreateObjectForm();
}
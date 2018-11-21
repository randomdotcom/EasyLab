var ErrorMsg = document.getElementsByClassName('errorMsg');
var CloseErrorMsg = document.getElementById('closeErrorMsg');

function deleteObject() {
    let listObject = document.getElementById('listObject');
    listObject.style.display = "none";
}

function deleteObjectError(){
    let form = document.getElementsByClassName("msgError-body")[0];
    let container = document.getElementsByClassName("container")[0];
    container.style.opacity = "0.3";
    form.style.display = "block";
}

function hiddenError(){
    let form = document.getElementsByClassName("msgError-body")[0];
    let container = document.getElementsByClassName("container")[0];
    container.style.opacity = "1.0";
    form.style.display = "none";
}
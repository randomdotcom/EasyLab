var ErrorMsg = document.getElementById('errorMsg');
var CloseErrorMsg = document.getElementById('closeErrorMsg');

ErrorMsg.onclick = displayError;
CloseErrorMsg.onclick = hiddenError;

var form = document.getElementsByClassName('msg-body')[0];
var container = document.getElementsByClassName('container')[0];

function displayError(){
    container.style.opacity = "0.3";
    form.style.display = "block";
}

function hiddenError(){
    container.style.opacity = "1.0";
    form.style.display = "none";
}
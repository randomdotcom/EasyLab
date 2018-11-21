var objectsList = document.getElementsByClassName('editObject');
var list = document.getElementsByClassName('listObject');
var addButton = document.getElementsByClassName('addButton')[0];

function ClickEditButton() {
    console.log(list);

    var block = (objectsList[0].style.display == "block")?true:false;

    for (var i = 0; i < objectsList.length; i++) {
        objectsList[i].style.display = block?"none":"block";
    }

    for (var i = 0; i < list.length; i++) {
        list[i].style.justifyContent = (list[i].style.justifyContent=="space-between")?"flex-end":"space-between";
    }

    addButton.style.display = (addButton.style.display=="flex")?"none":"flex";
}
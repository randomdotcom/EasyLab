let labs = document.getElementsByClassName('fa fa-play');
for (var i = 0; i < labs.length; i++) {
    labs[i].onclick = showTest;
}
var nextButton = document.getElementById('next-btn');
nextButton.onclick = nextQuestion;
var countNumber = 0;
var answers = document.getElementsByClassName('answer-text');
var quastion = document.getElementsByClassName('quastion')[0];
var radios = document.getElementsByName('answer');
let testBlock = document.getElementsByClassName('container-for-test')[0];
rightAnswers = [0, 0, 0, 0]
userAnswers = [];
var access;

function showTest() {
    countNumber = 0;
    testBlock.style.display = "block";
    renderTest();
    access = false;
}

function giveAccess(access) {
    if (access) {
        alert('Вы получили доступ к лабораторной работе')
    }
    else {
        alert('Доступа нету, попробуйте позже');
        for (var i = 0; i < labs.length; i++) {
            labs[i].style.display = "none";
        }
        setTimeout(function () {
            for (var i = 0; i < labs.length; i++) {
                labs[i].style.display = "inline";
            }
            alert("Доступ восстановлен");
        }, 30000);
    }

}

function renderTest() {

    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    var testTitle = document.getElementsByClassName('test-title')[0];
    testTitle.textContent = 'Тест для лабораторной работы';
    var test = [{
        quastion: 'Некоторый вопрос 1',
        answers: ['Ответ 1.1', 'Ответ 1.2', 'Ответ 1.3', 'Ответ 1.4'],

    },
    {
        quastion: 'Некоторый вопрос 2',
        answers: ['Ответ 2.1', 'Ответ 2.2', 'Ответ 2.3', 'Ответ 2.4'],
    },
    {
        quastion: 'Некоторый вопрос 3',
        answers: ['Ответ 3.1', 'Ответ 3.2', 'Ответ 3.3', 'Ответ 3.4'],
    },
    {
        quastion: 'Некоторый вопрос 4',
        answers: ['Ответ 4.1', 'Ответ 4.2', 'Ответ 4.3', 'Ответ 4.4'],
    },
    {
        quastion: 'Некоторый вопрос 5',
        answers: ['Ответ 5.1', 'Ответ 5.2', 'Ответ 5.3', 'Ответ 5.4'],
    }
    ];

    quastion.textContent = test[countNumber].quastion;
    for (var i = 0; i < answers.length; i++) {
        answers[i].textContent = test[countNumber].answers[i];
    }
}

function nextQuestion() {
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            userAnswers.push(i);
            break;
        }
    }

    countNumber++;

    if (countNumber == 5) {
        access = checkAnswer(userAnswers);
        testBlock.style.display = "none";
        giveAccess(access);
    } else {
        renderTest();
    }
}

function checkAnswer(userAnswers) {
    for (var i = 0; i < rightAnswers.length; i++) {
        if (userAnswers[i] !== rightAnswers[i]) return false;
    }
    return true;
}
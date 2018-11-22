let labs = document.getElementsByClassName('fa fa-play');
for (var i = 0; i < labs.length; i++) {
    labs[i].onclick = showTest;
}
var nextButton = document.getElementById('next-btn');
nextButton.onclick = nextQuestion;
var countNumber = 0;
var answers = document.getElementsByClassName('answer-text');
var quastion = document.getElementsByClassName('quastion')[0];
let testBlock = document.getElementsByClassName('test')[0];

function showTest() {
    countNumber = 0;
    testBlock.style.display = "block";
    renderTest();
}

function renderTest() {
    var radios = document.getElementsByName('answer');
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

    if (countNumber + 1 == 6) {
        var success = true;
        testBlock.style.display = "none";
        alert('Вы получили доступ к лабораторной работе');

    }


}

function nextQuestion() {
    countNumber++;
    renderTest();
}
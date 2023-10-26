const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  document.body.classList.add('menu-open');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
  document.body.classList.remove('menu-open');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


function checkAnswer(taskNumber, correctAnswer) {
    const answerInput = document.getElementById(`answer${taskNumber}`);
    const resultElement = document.getElementById(`result${taskNumber}`);
    const userAnswer = answerInput.value.toLowerCase();

    if (userAnswer === correctAnswer) {
        resultElement.style.color = "green";
        resultElement.textContent = "Правильно";
    } else {
        resultElement.style.color = "red";
        resultElement.textContent = "Неправильно";
    }
}

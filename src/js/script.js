const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', toggleMenu);
closeElem.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('active');
  document.body.classList.toggle('menu-open');
}


function checkAnswer(taskNumber, correctAnswer) {
    const answerInput = document.getElementById(`answer${taskNumber}`);
    const resultElement = document.getElementById(`result${taskNumber}`);
    const userAnswer = answerInput.value.toLowerCase();
    
    resultElement.style.color = userAnswer === correctAnswer ? "green" : "red";
    resultElement.textContent = userAnswer === correctAnswer ? "Правильно" : "Неправильно";
}
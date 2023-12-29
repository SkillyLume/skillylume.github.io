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

function gir() {
    let nums = document.getElementById('gir').className; 
    if(nums == 'gir_1') {document.getElementById('gir').className='gir_2';}  
    if(nums == 'gir_2') {document.getElementById('gir').className='gir_3';}  
    if(nums == 'gir_3') {document.getElementById('gir').className='gir_1';} 
}  
setInterval(gir, 500);
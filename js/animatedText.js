const textContainer = document.getElementById("animated-text");

textContainer.textContent = "";

const text = "Создатель - Радмир Узянбаев";

function printText() {
    let index = 0;
    const printInterval = setInterval(() => {
        if (index < text.length) {
            textContainer.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(printInterval);
        }
    }, 110);
}

setTimeout(() => {
    printText();
}, 600);
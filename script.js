const Boxes = [];
for (let i = 1; i <= 16; i++) {
    Boxes.push(document.getElementById(`box${i}`));
};

const inputBox = document.getElementById('inputBox');
let currentIndex = 0;


let typedLetter = "";
let expectedLetter = "";

function start() {
    inputBox.focus();
    currentBox = Boxes[currentIndex];
    currentBox.style.backgroundColor = 'rgb(11, 110, 110)';
    expectedLetter = currentBox.innerText.toLowerCase();
};



document.addEventListener('keydown', function (e) {

    typedLetter = e.key;
    if (typedLetter !== expectedLetter) {
        Boxes[currentIndex].style.backgroundColor = 'rgb(180, 15, 3)';
    } else {
        Boxes[currentIndex].style.backgroundColor = 'rgb(8, 126, 47)';
        currentIndex++;
        currentBox = Boxes[currentIndex];
        currentBox.style.backgroundColor = 'rgb(11, 110, 110)';
        expectedLetter = currentBox.innerText.toLowerCase();

    }
});










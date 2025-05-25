const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const box10 = document.getElementById("box10");
const box11 = document.getElementById("box11");
const box12 = document.getElementById("box12");
const box13 = document.getElementById("box13");
const box14 = document.getElementById("box14");
const box15 = document.getElementById("box15");
const box16 = document.getElementById("box16");
const startButton = document.getElementById('start');

let a = "";



document.addEventListener('keydown', function (e) {
    if (a == 1) {
        typedLetter = e.key;

        if (typedLetter === expectedLetter) {
            box1.style.backgroundColor = 'rgb(8, 126, 47)'; // green
            box2.style.backgroundColor = 'rgb(18, 44, 44)';
            a = 2;
                expectedLetter = box2.innerText;

        } else {
            box1.style.backgroundColor = 'rgb(180, 15, 3)'; // red
        }
    }else if (a == 2){
        typedLetter = e.key;

        if (typedLetter === expectedLetter) {
            box2.style.backgroundColor = 'rgb(8, 126, 47)'; // green
            box3.style.backgroundColor = 'rgb(18, 44, 44)';
            a = 3; // move to next box
        }
        else {
            box2.style.backgroundColor = 'rgb(180, 15, 3)'; // red
        }// game paused until next start
    }
});




let typedLetter = "";
let expectedLetter = "";

startButton.addEventListener('click', () => {
    box1.style.backgroundColor = 'rgb(18, 44, 44)';
    expectedLetter = box1.innerText;
    a = 1;
});








//     a++;
//     if (a === 2) {
//         box2.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box2.textContent;
//     } else if (a === 3) {
//         box3.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box3.textContent;
//     } else if (a === 4) {
//         box4.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box4.textContent;
//     } else if (a === 5) {
//         box5.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box5.textContent;
//     } else if (a === 6) {
//         box6.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box6.textContent;
//     } else if (a === 7) {
//         box7.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box7.textContent;
//     } else if (a === 8) {
//         box8.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box8.textContent;
//     } else if (a === 9) {
//         box9.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box9.textContent;
//     } else if (a === 10) {
//         box10.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box10.textContent;
//     } else if (a === 11) {
//         box11.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box11.textContent;
//     } else if (a === 12) {
//         box12.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box12.textContent;
//     } else if (a === 13) {
//         box13.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box13.textContent;
//     } else if (a === 14) {
//         box14.style.backgroundColor = 'rgb(18, 44, 44)';
//         expectedLetter = box14.textContent;
//     }
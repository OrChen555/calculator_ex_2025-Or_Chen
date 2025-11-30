let x, y;
let result;
let operator;


let display = document.querySelector('.display');
const numberButtons = document.querySelectorAll(".number");
let plus = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let equal = document.querySelector('#equal');

numberButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (x !== undefined) {
            y = +btn.textContent
            addNumberToDisplay(y)
        }
        else {
            x = +btn.textContent
            addNumberToDisplay(x)
        }
        console.log("x: " + x + "y: " + y)
    });
});

plus.addEventListener('click', function () {
    operator = '+'
   addNumberToDisplay('+')
})

subtract.addEventListener('click', function () {
    operator = '-'
   addNumberToDisplay('-')
})



equal.addEventListener('click', function () {
    if (operator == '+') {
        result = x + y;
        display.textContent = result;
    }
    if(operator== '-'){
        result = x - y;
        display.textContent = result;
    }
})

function addNumberToDisplay(num) {
    display.textContent += num;
}

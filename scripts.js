
const screen = document.querySelector('#screen');
const equalBtn = document.querySelector('#equalBtn');

function operate(num1, operator, num2) {
    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "*") {
        return num1 * num2;
    } else if (operator == "/") {
        return num1 / num2;
    } else {
        return(num1);
    }
}

console.log(operate(1, "*", 3))
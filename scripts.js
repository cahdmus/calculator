
const screen = document.querySelector('#screen');
const btns = document.querySelectorAll('.btn');

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

// console.log(operate(1, "*", 3))

function addNum() {
    
}

let input = [];
let num1 = 0;
let displayValue = "0000";

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        switch (btn.id) {
            case 'zero':
                input.push(0);
            break;
            case 'one':
                input.push(1);
            break;
            case 'two':
                input.push(2);
            break;
            case 'three':
                input.push(3);
            break;
            case 'four':
                input.push(4);
            break;
            case 'five':
                input.push(5);
            break;
            case 'six':
                input.push(6);
            break;
            case 'seven':
                input.push(7);
            break;
            case 'eight':
                input.push(8);
            break;
            case 'nine':
                input.push(9);
            break;
            case 'clear':
                input = [];
            break;
            case 'add':
                num1 = displayValue;
                input = [];

                console.log(num1);
            break;
        }
        displayValue = input.join("");
        screen.textContent = displayValue;
    })
})
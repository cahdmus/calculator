const screen = document.querySelector('#screen');
const btns = document.querySelectorAll('.btn');

function operate(num1, operator, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (operator === "add") {
        return num1 + num2;
    } else if (operator === "subtract") {
        return num1 - num2;
    } else if (operator === "multiply") {
        return num1 * num2;
    } else if (operator === "divide") {
        return num1 / num2;
    } else {
        return "idk...";
    }
}

let displayValue;
let input = [];
let args = [];
let result;

function getInput() {

    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            switch (btn.className) {
                case 'btn num':
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
                        case 'point':
                            input.push(".");
                            break;
                    }
                    displayValue = input.join("");
                    screen.textContent = displayValue;
                    break;

                case 'btn operator':
                    input = [];
                    args.push(displayValue);
                    args.push(btn.id);
                    displayValue = "---";
                    screen.textContent = displayValue;
                    break;

                case 'btn equals':
                    input = [];
                    args.push(displayValue);
                    displayValue = operate.apply(this, args);
                    screen.textContent = displayValue;
                    args = [];
                    break;

                    case 'btn clear':
                        input = [];
                        displayValue = "cleared";
                        screen.textContent = displayValue;
                        args = [];
                        break;
            }
        })
    })
}

getInput();
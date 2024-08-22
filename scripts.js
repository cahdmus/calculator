const screen = document.querySelector('#screen');
const btns = document.querySelectorAll('.btn');

function checkComma(arr) {
    let point = arr.includes('.');
    let comma = arr.includes(',');
    let result = [point, comma];

    return result.includes(true);
}

function resultSize(result) {
    if (result.length <= 10) {
        return true;
    }
}

function operate(num1, operator, num2) {
    function roundNumber(num) {
        return num.toFixed(2).replace(/\.?0+$/, "")
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case 'add':
        case '+':
            return roundNumber(num1 + num2);
        case 'subtract':
        case '-':
            return roundNumber(num1 - num2);
        case 'multiply':
        case '*':
            return roundNumber(num1 * num2);
        case 'divide':
        case '/':
            return roundNumber(num1 / num2);
        default:
            return "idk..."
    }
}

let displayValue;
let input = [];
let args = [];
let result;

function getInput() {
    document.addEventListener('keydown', e => {
        switch (e.key) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                input.push(e.key);
                displayValue = input.join("");
                screen.textContent = displayValue;
                break;
            case '.':
            case ',':
                if (checkComma(input) === false) {
                    input.push(e.key);
                    displayValue = input.join("");
                    screen.textContent = displayValue;
                }
                break;

            case '/':
            case '*':
            case '-':
            case '+':
                input = [];
                if (args[1] === undefined) {
                    args.push(displayValue);
                    args.push(e.key);
                } else {
                    args.splice(1, 1, e.key);
                }
                displayValue = "---";
                screen.textContent = displayValue;
                console.log(args);
                break;

            case 'Enter':
                input = [];
                args.push(displayValue);
                displayValue = operate.apply(this, args);
                if (resultSize(displayValue) === true) {
                    screen.textContent = displayValue;
                } else {
                    screen.textContent = "Too hard !";
                }
                args = [];
                break;

            case 'Delete':
                input = [];
                displayValue = "cleared";
                screen.textContent = displayValue;
                args = [];
                break;

            case 'Backspace':
                input.pop();
                displayValue = input.join("");
                screen.textContent = displayValue;
                break;
        }
    })

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
                            if (checkComma(input) === false) {
                                input.push(".");
                            }
                            break;
                    }
                    displayValue = input.join("");
                    screen.textContent = displayValue;
                    break;

                case 'btn operator':
                    input = [];
                    if (args[1] === undefined) {
                        args.push(displayValue);
                        args.push(btn.id);
                    } else {
                        args.splice(1, 1, btn.id);
                    }
                    displayValue = "---";
                    screen.textContent = displayValue;
                    console.log(args);
                    break;

                case 'btn equals':
                    input = [];
                    args.push(displayValue);
                    displayValue = operate.apply(this, args);
                    if (resultSize(displayValue) === true) {
                        screen.textContent = displayValue;
                    } else {
                        screen.textContent = "Too hard !";
                    }
                    args = [];
                    break;

                case 'btn clear':
                    input = [];
                    displayValue = "cleared";
                    screen.textContent = displayValue;
                    args = [];
                    break;

                case 'btn backspace':
                    input.pop();
                    displayValue = input.join("");
                    screen.textContent = displayValue;
                    break;
            }
        })
    })
}

getInput();
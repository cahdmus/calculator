const inputScreen = document.querySelector('#inputScreen');
const operationScreen = document.querySelector('#operationScreen');
const btns = document.querySelectorAll('.btn');

function checkComma(arr) {
    let point = arr.includes('.');
    let comma = arr.includes(',');
    let result = [point, comma];

    return result.includes(true);
}

// Makes sure the result is not too long for the screen
function resultSize(result) {
    if (result.length <= 10) {
        return true;
    }
}

function isInfinite(result) {
    if (result == Infinity) {
        return true;
    }
}

function isOperationValid(arr) {
    if (arr.length >= 1) {
        return true;
    }
}

function isResultValid(result) {
    if (isInfinite(result) === true) {
        inputScreen.textContent = "No.";
        operationScreen.textContent = '';
    } else if (resultSize(result) === true) {
        inputScreen.textContent = displayValue;
        args.push("=");
        operationScreen.textContent = args.join(" ");
    } else {
        inputScreen.textContent = "Too hard !";
        operationScreen.textContent = '';
    }
}

function operate(num1, operator, num2) {
    function roundNumber(num) {
        return num.toFixed(2).replace(/\.?0+$/, "")
    }

    if (num2 === "---") {
        num2 = 0;
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
let calcResult;

function getInput() {
    document.addEventListener('keydown', e => {
        console.log(args);

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
                inputScreen.textContent = displayValue;
                break;
            case '.':
            case ',':
                if (checkComma(input) === false) {
                    input.push(e.key);
                    displayValue = input.join("");
                    inputScreen.textContent = displayValue;
                }
                break;

            case '/':
            case '*':
            case '-':
            case '+':
                input = [];

                args.push(displayValue);
                args.push(e.key);

                if (args.length >= 3) {
                    calcResult = operate.apply(this, args);
                    args.splice(0, 3, calcResult);
                    inputScreen.textContent = "0";
                } else {
                    inputScreen.textContent = displayValue;
                }

                operationScreen.textContent = args.join(" ");
                break;

            case 'Enter':
                input = [];
                if (isOperationValid(args) === true) {
                    args.push(displayValue);
                    displayValue = operate.apply(this, args);
                    isResultValid(displayValue);
                    args = [];
                }
                break;

            case 'Delete':
                input = [];
                displayValue = "cleared";
                inputScreen.textContent = displayValue;
                operationScreen.textContent = "";
                args = [];
                break;

            case 'Backspace':
                input.pop();
                displayValue = input.join("");
                inputScreen.textContent = displayValue;
                break;
        }
    })

    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            console.log(args);

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
                    inputScreen.textContent = displayValue;
                    break;

                case 'btn operator':
                    input = [];

                    switch (btn.id) {
                        case 'divide':
                            btn.id = '/'
                            break;
                        case 'multiply':
                            btn.id = "*";
                            break;
                        case 'add':
                            btn.id = "+";
                            break;
                        case 'subtract':
                            btn.id = "-";
                            break;
                    }

                    args.push(displayValue);
                    args.push(btn.id);

                    if (args.length >= 3) {
                        calcResult = operate.apply(this, args);
                        args.splice(0, 3, calcResult);
                        inputScreen.textContent = "0";
                    } else {
                        inputScreen.textContent = displayValue;
                    }

                    operationScreen.textContent = args.join(" ");
                    break;

                case 'btn equals':
                    input = [];
                    if (isOperationValid(args) === true) {
                        args.push(displayValue);
                        displayValue = operate.apply(this, args);
                        isResultValid(displayValue);
                        args = [];
                    }
                    break;

                case 'btn clear':
                    input = [];
                    displayValue = "cleared";
                    inputScreen.textContent = displayValue;
                    operationScreen.textContent = "";
                    args = [];
                    break;

                case 'btn backspace':
                    input.pop();
                    displayValue = input.join("");
                    inputScreen.textContent = displayValue;
                    break;
            }
        })
    })
}

getInput();
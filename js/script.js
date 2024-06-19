const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

const subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

const divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
}

const operator = (operand, firstNumber, secondNumber) => {

    switch(operand) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        default:
            return null;
    }
}

const displayScreen = document.querySelector('.screen-display');
const buttonCalculator = document.querySelector('.calculator-buttons');
const clearButton = document.querySelector('#clear');

let firstNumber = '';
let secondNumber = '';
let selectedOperator = '';
let displayValue = '';

const populateDisplay = () => {
    buttonCalculator.addEventListener('click', (e) => {
        const currentValue = e.target.value;
        const currentOperator = e.target.innerText;

        if (currentValue) {
            if (selectedOperator === '') {
                displayValue = currentValue;
                firstNumber += displayValue;
                displayScreen.textContent = firstNumber;
            } else {
                displayValue = currentValue;
                secondNumber += displayValue;
                displayScreen.textContent = secondNumber;
            }
        }

        if (currentOperator.includes("+") || currentOperator.includes("-") ||
            currentOperator.includes("/") || currentOperator.includes("X")
           ) {
            if (firstNumber !== '') {
                selectedOperator = currentOperator === "X" ? "*" : currentOperator;
                console.log(selectedOperator);
            }
        }

        if (currentOperator === "=") {
            const result = operator(selectedOperator, parseInt(firstNumber), parseInt(secondNumber));
            displayScreen.textContent = result;
            firstNumber = result.toString();
            secondNumber = '';
            selectedOperator = '';
        }
    });
}

populateDisplay();

clearButton.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
    displayValue = '';
    displayScreen.textContent = 0;
    return;
});
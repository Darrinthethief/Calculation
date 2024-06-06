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

let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let displayValue = '';

const populateDisplay = () => {
    buttonCalculator.addEventListener('click', (e) => {
        const currentValue = e.target.value;
        const currentOperator = e.target.innerText;

        if (currentValue) {
            displayValue += currentValue;
            firstNumber = displayValue;
            displayScreen.textContent = firstNumber;
        }
    });
}

populateDisplay();
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "Error: Division by Zero"
    }
    return firstNumber / secondNumber;
}

function operator(operand, firstNumber, secondNumber) {

    switch(operand) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
    }
}

const displayScreen = document.querySelector('.screen-display');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector("#delete");
const percentButton = document.querySelector("#percent");
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equal');

let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let displayValue = '';

function clearDisplay() {
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    displayValue = '';
    displayScreen.textContent = "0";
    return;
}

clearButton.addEventListener('click', clearDisplay);

function populateDisplay() {
    numberButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
           console.log(e.target.textContent);
        });
    });
}

populateDisplay();

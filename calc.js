function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNum, secondNum, operator) {
    return operators[operator](firstNum, secondNum);
}

const display = document.querySelector('.display');
const operators = {
    '+': add,
    '-': subtract, 
    '*': multiply,
    '/': divide
}

let displayValue = null;
let inputOne = null;
let operator = null;
let inputTwo = null;

const numButtons = document.querySelectorAll('.num');
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    })
})

const operatorButtons = document.querySelectorAll('.digit-operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    })
})

const btnEquals = document.querySelector('.equals');
btnEquals.addEventListener('click', () => {
    operatorIndex = display.textContent.search(/[\+\-\*\/]/);
    operator = display.textContent.charAt(operatorIndex);
    inputs = display.textContent.split(/[\+\-\*\/]/);
    inputOne = parseInt(inputs[0]);
    inputTwo = parseInt(inputs[1]);
    result = operate(inputOne, inputTwo, operator);
    display.textContent = result;
});

const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', () => {
    display.textContent = '';
});
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
    return operators[operator](firstNum, secondtNum);
}

const operators = {
    '+': add,
    '-': subtract, 
    '*': multiply,
    '/': divide
}

const display = document.querySelector('.display');
let displayValue;

const btnOne = document.querySelector('.btn-one');
btnOne.addEventListener('click', () => {
    display.textContent += 1;
    displayValue = display.textContent;
});
const btnTwo = document.querySelector('.btn-two');
btnTwo.addEventListener('click', () => {
    display.textContent += 2;
    displayValue = display.textContent;
});
const btnThree = document.querySelector('.btn-three');
btnThree.addEventListener('click', () => {
    display.textContent += 3;
    displayValue = display.textContent;
});
const btnFour = document.querySelector('.btn-four');
btnFour.addEventListener('click', () => {
    display.textContent += 4;
    displayValue = display.textContent;
});
const btnFive = document.querySelector('.btn-five');
btnFive.addEventListener('click', () => {
    display.textContent += 5;
    displayValue = display.textContent;
});
const btnSix = document.querySelector('.btn-six');
btnSix.addEventListener('click', () => {
    display.textContent += 6;
});
const btnSeven = document.querySelector('.btn-seven');
btnSeven.addEventListener('click', () => {
    display.textContent += 7;
    displayValue = display.textContent;
});
const btnEight = document.querySelector('.btn-eight');
btnEight.addEventListener('click', () => {
    display.textContent += 8;
    displayValue = display.textContent;
});
const btnNine = document.querySelector('.btn-nine');
btnNine.addEventListener('click', () => {
    display.textContent += 9;
    displayValue = display.textContent;
});
const btnZero = document.querySelector('.btn-zero');
btnZero.addEventListener('click', () => {
    display.textContent += 0;
    displayValue = display.textContent;
});
const btnPlus = document.querySelector('.btn-plus');
btnPlus.addEventListener('click', () => {
    display.textContent += '+';
    displayValue = display.textContent;
});
const btnMinus = document.querySelector('.btn-minus');
btnMinus.addEventListener('click', () => {
    display.textContent += '-';
    displayValue = display.textContent;
});
const btnMultiply = document.querySelector('.btn-multiply');
btnMultiply.addEventListener('click', () => {
    display.textContent += '*';
    displayValue = display.textContent;
});
const btnDivide = document.querySelector('.btn-divide');
btnDivide.addEventListener('click', () => {
    display.textContent += '/';
    displayValue = display.textContent;
});
const btnEquals = document.querySelector('.btn-equals');
btnEquals.addEventListener('click', () => {
    display
});
const btnClear = document.querySelector('.btn-clear');
btnClear.addEventListener('click', () => {
    display.textContent = '';
});
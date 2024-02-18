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

let firstNum = window.prompt(`Enter first number: `);
let secondtNum = window.prompt(`Enter second number: `);
let operator = window.prompt("Enter operator: ");

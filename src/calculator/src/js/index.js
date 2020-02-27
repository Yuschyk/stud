const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const decimalBtn = document.getElementById('decimal');
const ac = document.getElementById('AC');
const display = document.getElementById('display');
let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let memoryPendingOperation = "";


for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function(e) {
        numberPress(e.target.textContent);
    });

}

for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e) {
        operation(e.target.textContent);
    });
}


decimalBtn.addEventListener('click', decimal);

ac.addEventListener('click', clear);

function numberPress(number) {
    const displayValue = display.value;
    const newValue = createValue(number, displayValue, memoryNewNumber);
    memoryNewNumber = newValue[1];
    display.value = newValue[0];
}

function createValue(number, value, flag) {
    if (flag) {
        flag = false;
        number = String(number);
        return [number, flag];
    } else {
        if (value === "0") {
            number = String(number);
            return [number, flag];
        } else {
            return [value + number, flag];
        }
    }
}


function operation(operand) {

    let memoryLocalOperation = display.value;

    if (memoryNewNumber && memoryPendingOperation !== "=") {
        display.value = memoryCurrentNumber;
    } else {
        memoryNewNumber = true;
        if (memoryPendingOperation === "+") {
            memoryCurrentNumber = sum(memoryCurrentNumber, memoryLocalOperation);
        } else if (memoryPendingOperation === "-") {
            memoryCurrentNumber = min(memoryCurrentNumber, memoryLocalOperation);
        } else if (memoryPendingOperation === "*") {
            memoryCurrentNumber = mul(memoryCurrentNumber, memoryLocalOperation);
        } else if (memoryPendingOperation === "/") {
            memoryCurrentNumber = division(memoryCurrentNumber, memoryLocalOperation);
        } else {
            memoryCurrentNumber = parseFloat(memoryLocalOperation);
        }

        display.value = memoryCurrentNumber;
        memoryPendingOperation = operand;

    }
}

function sum(value1, value2) {
    return value1 + parseFloat(value2);
}

function min(value1, value2) {
    return value1 - parseFloat(value2);
}

function mul(value1, value2) {
    return value1 * parseFloat(value2);
}

function division(value1, value2) {
    return value1 / parseFloat(value2);
}

function clear() {
    display.value = "0";
    memoryNewNumber = true;
    localDecimalMemory = 0;
    memoryPendingOperation = "";
    memoryCurrentNumber = 0;
    memoryLocalOperation = 0;


}

function decimal() {
    let localDecimalMemory = display.value;
    const result = checkDecimal(localDecimalMemory, memoryNewNumber);
    display.value = result[0];
    memoryNewNumber = result[1];
}

function checkDecimal(value, flag) {

    if (flag) {
        value = "0";
        flag = false;
    } else {
        if (value.indexOf('.') === -1) {
            value += '.';
        }
    }

    return [value, flag];
}
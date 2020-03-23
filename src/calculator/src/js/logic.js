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

module.exports = {
    createValue,
    sum,
    min,
    mul,
    division,
    checkDecimal
};

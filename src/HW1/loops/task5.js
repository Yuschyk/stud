"use strict"
function sumOfNumbers(num) {
    let sum = 0;
    let i;
    while (num != 0) {
        i = num % 10;
        num = (num - i) / 10;
        sum += i;
    }
    return sum;
}
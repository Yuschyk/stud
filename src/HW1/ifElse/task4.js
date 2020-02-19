"use strict"

function sumMulMax(a,b,c) {

    let mul = a * b * c;
    let sum = a + b + c;
    if (mul > sum) {
        mul += 3;
        return mul
    } else if (mul < sum) {
        sum += 3;
        return sum;
    } else if (mul == sum) {
        return console.log("Сумма равна произведению");
    }
}
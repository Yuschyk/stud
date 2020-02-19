"use strict"
function getFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    if (num < 0){
        return 0;
    }
    return factorial;
}
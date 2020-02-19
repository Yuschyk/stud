"use strict"
function primeNum(num) {
    let prime = true;
    for (let i = 2; i < num; i++){
        if (num % i == 0) {
            prime = false;
        }
    }
return prime;
}
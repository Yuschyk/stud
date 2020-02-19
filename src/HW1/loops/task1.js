"use strict"
function sumNum() {

    let sum = 0;
    let num = 0;
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            sum += i;
            num++;
        }
    }
    return [sum,num];
}

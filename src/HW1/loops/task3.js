"use strict"
function getSqrt(num) {
    let sqrt = 0;
    for (let i = 1; i <= num; num -= i, i += 2) {
        sqrt++;
    }

    return sqrt;
}

"use strict"
function getReverseNum(num) {
    let str = num.toString();
    let rts = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rts += str[i];
    }
    return rts;
}

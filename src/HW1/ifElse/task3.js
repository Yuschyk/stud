"use strict"

    function getSumPosNum(a,b,c) {
        let sum = 0;

        if (a > 0) {
            sum += a;
        }
        if (b > 0) {
            sum += b;
        }
        if (c > 0) {
            sum += c;
        }
        return sum;
    }
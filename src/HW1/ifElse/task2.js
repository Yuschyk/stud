"use strict"

function getQuarter(x,y) {
if (x > 0 && y > 0) {
    return "1";
} else if (x < 0 && y > 0) {
    return "2";
} else if (x < 0 && y < 0) {
    return "3";
} else if (x > 0 && y < 0) {
    return "4";
} else if (x == 0 && y == 0) {
    return console.log("Начало координат") ;
} else if (x != 0 && y == 0) {
    return console.log("На оси X");
} else if (x == 0 && y != 0) {
    return console.log("На оси y");
}
}
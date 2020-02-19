function sumElemOdd(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 0) {
            sum += array[i];
        }
    }
    return sum;
}
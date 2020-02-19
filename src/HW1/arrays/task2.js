function maxElem(array) {
    var max = array[0];

    for (let i = 1; i < array.length; ++i) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
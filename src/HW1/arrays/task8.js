function reverseHalf(array) {
    for (i = 0; i < array.length / 2; i++) {
        t = array[i];
        array[i] = array[array.length / 2 + i];
        array[array.length / 2 + i] = t;
    }
    return array;
}

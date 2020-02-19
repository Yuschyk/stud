function reverseArray(arr) {
    let temp;
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

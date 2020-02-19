function bubbleSort(array) {
    for (let left = 0; left < array.length; left++) {
        let value = array[left];
        let i = left - 1;
        for (; i >= 0; i--) {
            if (value < array[i]) {
                array[i + 1] = array[i];
            } else {
                break;
            }
        }
        array[i + 1] = value;
    }
    return array;
}

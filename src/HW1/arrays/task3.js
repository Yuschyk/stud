
function minInd(array) {
    var min = array[0];
    var index = 0;
    for (let i = 1; i < array.length; ++i) {
        if (array[i] < min) {
            min = array[i];
            index = i;
        }
    }
    return index;
}

function maxInd(array) {

    var max = array[0];
    var index = 0;
    for (let i = 1; i < array.length; ++i) {
        if (array[i] > max) {
            max = array[i];
            index = i;
        }
    }
    return index;
}
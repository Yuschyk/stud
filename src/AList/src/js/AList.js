function AList(array) {
    this.defaultArray = array;
    this.array = [];
    this.init();
}

AList.prototype.init = function() {
    let index = 0;
    while (this.defaultArray[index]) {
        this.array[index] = this.defaultArray[index];
        index++;
    }
};

AList.prototype.size = function() {
    let index = 0;
    while (this.array[index]) {
        index++;
    }
    return index;
};

AList.prototype.addStart = function(element) {
    const arr = [element];
    for (let i = 0; i < this.size(); i++) {
        arr[i + 1] = this.array[i];
    }
    this.array = arr;
    return this.size();
};

AList.prototype.addEnd = function(element) {
    const length = this.size();
    const arr = new Array(length + 1);
    arr[length] = element;
    for (let i = 0; i < this.size(); i++) {
        arr[i] = this.array[i];
    }
    this.array = arr;
    return this.size();
};

AList.prototype.delStart = function() {
    const arr = [];
    const deletedEl = this.array[0];
    for (let i = 1; i < this.size(); i++) {
        arr[i - 1] = this.array[i];
    }
    this.array = arr;
    return deletedEl;
};

AList.prototype.delEnd = function() {
    const arr = [];
    const deletedEl = this.array[this.size() - 1];
    for (let i = 0; i < this.size() - 1; i++) {
        arr[i] = this.array[i];
    }
    this.array = arr;
    return deletedEl;
};

AList.prototype.delPos = function(index) {
    const arr = [];
    const deletedEl = this.array[index];
    let j = 0;
    for (let i = 0; i < this.size(); i++) {
        if (i !== index) {
            arr[j] = this.array[i];
            j++;
        }
    }
    this.array = arr;
    return deletedEl;
};

AList.prototype.get = function(index) {
    const getEl = this.array[index];
    if (getEl) {
        return getEl;
    }
    return `Error! Index ${index} is not in range`;
};

AList.prototype.set = function(index, element) {
    if (index < this.size()) {
        this.array[index] = element;
    }
    return `Error! Index ${index} is not available`;
};

AList.prototype.toString = function() {
    let str = String();
    for (let i = 0; i < this.size(); i++) {
        str += this.array[i];
    }
    return str;
};

AList.prototype.clear = function() {
    this.array = this.defaultArray;
};

AList.prototype.min = function() {
    let minEl = this.array[0];
    for (let i = 1; i < this.size(); i++) {
        if (this.array[i] < minEl) {
            minEl = this.array[i];
        }
    }
    return minEl;
};

AList.prototype.max = function() {
    let maxEl = this.array[0];
    for (let i = 1; i < this.size(); i++) {
        if (this.array[i] > maxEl) {
            maxEl = this.array[i];
        }
    }
    return maxEl;
};

AList.prototype.sort = function() {
    for (let i = 0; i < this.size(); i++) {
        let indexMin = i;
        for (let j = i + 1; j < this.size(); j++) {
            if (this.array[indexMin] > this.array[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [this.array[i], this.array[indexMin]] = [this.array[indexMin], this.array[i]];
        }
    }
};

AList.prototype.minIndex = function() {
    let minEl = this.array[0];
    let indexMinEl = 0;
    for (let i = 1; i < this.size(); i++) {
        if (this.array[i] < minEl) {
            minEl = this.array[i];
            indexMinEl = i;
        }
    }
    return indexMinEl;
};

AList.prototype.maxIndex = function() {
    let maxEl = this.array[0];
    let indexMaxEl = 0;
    for (let i = 1; i < this.size(); i++) {
        if (this.array[i] > maxEl) {
            maxEl = this.array[i];
            indexMaxEl = i;
        }
    }
    return indexMaxEl;
};

AList.prototype.reverse = function() {
    const arr = [];
    for (let i = 0, j = this.size() - 1; i < this.size(); i++, j--) {
        arr[i] = this.array[j];
        this.array[j] = this.array[i];
    }
    this.array = arr;
};

AList.prototype.halfReverse = function() {
    const arr = [];
    let j = 0;
    let l = this.size() - 1;

    if (this.size() % 2 === 0) {
        const half = this.size() / 2;
        let k = half - 1;

        for (let i = 0; i < this.size(); i++) {
            if (i < half) {
                arr[j] = this.array[k];
                j++;
                k--;
            } else {
                arr[j] = this.array[l];
                j++;
                l--;
            }
        }
    } else {
        const median = (this.size() - 1) / 2;
        let k = median - 1;

        for (let i = 0; i < this.size(); i++) {
            if (i < median) {
                arr[j] = this.array[k];
                j++;
                k--;
            } else if (i === median) {
                arr[j] = this.array[median];
                j++;
            } else if (i > median) {
                arr[j] = this.array[l];
                j++;
                l--;
            }
        }
    }
    this.array = arr;
};

module.exports.AList = AList;
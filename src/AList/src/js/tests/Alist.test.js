const { AList } = require('../AList');

describe('findSizeOfArray', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('array', function() {
        assert.deepEqual(testArray.size(testArray), 7);
    });
});

describe('addStart', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('add 56', function() {
        assert.deepEqual(testArray.addStart(56), 8);
        assert.deepEqual(testArray.get(0), 56);
        assert.deepEqual(testArray.array, [56, 5, 10, 11, 12, 15, 20, 123]);
    });
});

describe('addEnd', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('add 234', function() {
        assert.deepEqual(testArray.addEnd(234), 8);
        assert.deepEqual(testArray.get(7), 234);
        assert.deepEqual(testArray.array, [5, 10, 11, 12, 15, 20, 123, 234]);
    });
});

describe('delStart', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('delStart is done', function() {
        testArray.delStart();
        assert.deepEqual(testArray.size(), 6);
        assert.deepEqual(testArray.get(0), 10);
        assert.deepEqual(testArray.array, [10, 11, 12, 15, 20, 123]);
    });
});

describe('delEnd', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('delEnd is done', function() {
        testArray.delEnd();
        assert.deepEqual(testArray.size(), 6);
        assert.deepEqual(testArray.array, [5, 10, 11, 12, 15, 20]);
    });
});

describe('delPos', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('delPos  is done', function() {
        assert.deepEqual(testArray.delPos(4), 15);
        assert.deepEqual(testArray.array, [5, 10, 11, 12, 20, 123]);
    });
});

describe('get', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('index = 3', function() {
        assert.deepEqual(testArray.get(3), 12);
    });
    it('index = 10', function() {
        assert.equal(testArray.get(10), 'Error! Index 10 is not in range');
    });
});

describe('set', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('index = 5, value = 99', function() {
        testArray.set(5, 99);
        assert.deepEqual(testArray.get(5), 99);
    });
    it('index = 7, value = 99', function() {
        assert.deepEqual(testArray.set(7, 99), `Error! Index 7 is not available`);
    });
});

describe('toStringTest', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('toString is done', function() {
        assert.deepEqual(testArray.toString(), '51011121520123');
    });
});

describe('clear', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('clear is done', function() {
        testArray.addStart(56);
        testArray.addEnd(154);
        testArray.clear();
        assert.deepEqual(testArray.get(0), 5);
        assert.deepEqual(testArray.size(), 7);
        assert.deepEqual(testArray.array, [5, 10, 11, 12, 15, 20, 123]);
    });
});

describe('getMinEl', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('getMinEl', function() {
        assert.deepEqual(testArray.min(), 5);
    });
});

describe('getMaxEl', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('getMaxEl', function() {
        assert.deepEqual(testArray.max(), 123);
    });
});

describe('sort', function() {
    const testArray = new AList([11, 15, 10, 123, 20, 5, 12]);
    it('sort is done', function() {
        testArray.sort();
        assert.deepEqual(testArray.get(0), 5);
        assert.deepEqual(testArray.get(3), 12);
        assert.deepEqual(testArray.get(4), 15);
        assert.deepEqual(testArray.get(6), 123);
        assert.deepEqual(testArray.array, [5, 10, 11, 12, 15, 20, 123]);
    });
});

describe('getIndexOfMin', function() {
    const testArray = new AList([11, 15, 10, 123, 20, 5, 12]);
    it('minIndex is got', function() {
        assert.deepEqual(testArray.minIndex(), 5);
    });
});

describe('getIndexOfMax', function() {
    const testArray = new AList([11, 15, 10, 123, 20, 5, 12]);
    it('maxIndex is got', function() {
        assert.deepEqual(testArray.maxIndex(), 3);
    });
});

describe('reverse', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('reverse is done', function() {
        testArray.reverse();
        assert.deepEqual(testArray.get(0), 123);
        assert.deepEqual(testArray.get(3), 12);
        assert.deepEqual(testArray.get(4), 11);
        assert.deepEqual(testArray.get(6), 5);
        assert.deepEqual(testArray.array, [123, 20, 15, 12, 11, 10, 5]);
    });
});

describe('halfReverse', function() {
    const testArray = new AList([5, 10, 11, 12, 15, 20, 123]);
    it('halfReverse is done', function() {
        testArray.halfReverse();
        assert.deepEqual(testArray.get(0), 11);
        assert.deepEqual(testArray.get(2), 5);
        assert.deepEqual(testArray.get(3), 12);
        assert.deepEqual(testArray.get(6), 15);
        assert.deepEqual(testArray.array, [11, 10, 5, 12, 123, 20, 15]);
    });
});
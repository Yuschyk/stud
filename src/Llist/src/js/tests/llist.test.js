const LList = require('../llist');

describe('findSize', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  const emptyLList = new LList([]);
  it('find size of LList', function() {
    assert.deepEqual(testLList.size(), 7);
    assert.deepEqual(emptyLList.size(), 'Linked list is empty');
  });
});

describe('addStart', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  it('add 56', function() {
    assert.deepEqual(testLList.addStart(56), 8);
    assert.deepEqual(testLList.get(0), 56);
  });
});

describe('addEnd', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  it('add 234', function() {
    assert.deepEqual(testLList.addEnd(234), 8);
    assert.deepEqual(testLList.get(7), 234);
  });
});

describe('addPosition', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  it('add 24, index 2', function() {
    testLList.addPosition(2, 24);
    assert.deepEqual(testLList.get(2), 24);
  });
  it('add 24, index 10', function() {
    assert.deepEqual(testLList.addPosition(10, 24), 'Error! Index 10 is not in range');
  });
});

describe('get', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  it('get element, index 3', function() {
    assert.deepEqual(testLList.get(3), 12);
  });
  it('get element, index 15', function() {
    assert.deepEqual(testLList.get(15), 'Error! Index 15 is not in range');
  });
});

describe('set', function () {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  it('index = 5, value = 99', function() {
    testLList.set(5, 99);
    assert.deepEqual(testLList.get(5), 99);
  });
  it('index = 7, value = 99', function() {
    assert.deepEqual(testLList.set(7, 99), `Error! Index 7 is not available`);
  });
});

describe('delStart', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  it('delStart is done', function() {
    testLList.delStart();
    assert.deepEqual(testLList.size(), 6);
    assert.deepEqual(testLList.get(0), 10);
  });
});
describe('delEnd', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  it('delEnd is done', function() {
    testLList.delEnd();
    assert.deepEqual(testLList.size(), 6);
  });
});
describe('delPosition', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  it('delPosition  is done', function() {
    assert.deepEqual(testLList.delPosition(4), 15);
  });
  it('delPosition isn\'t done', function() {
    assert.deepEqual(testLList.delPosition(19), 'Error! Position 19 is not in range');
  });
});

describe('toString', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  const emptyLList = new LList([]);
  it('toString is done', function() {
    assert.deepEqual(testLList.toString(), '51011121520123');
    assert.deepEqual(emptyLList.toString(), 'Linked list is empty');
  });
});

describe('toArray', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  const emptyLList = new LList([]);
  it('toArray is done', function() {
    assert.deepEqual(testLList.toArray(), [5, 10, 11, 12, 15, 20, 123]);
    assert.deepEqual(emptyLList.toArray(), 'Linked list is empty');
  });
});

describe('getMinEl', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  const emptyLList = new LList([]);
  it('getMinEl', function() {
    assert.deepEqual(testLList.min(), 5);
    assert.deepEqual(emptyLList.min(), 'Linked list is empty');
  });
});

describe('getMaxEl', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  const emptyLList = new LList([]);
  it('getMaxEl', function() {
    assert.deepEqual(testLList.max(), 123);
    assert.deepEqual(emptyLList.max(), 'Linked list is empty');
  });
});

describe('getIndexOfMin', function() {
  const testLList = new LList([11, 15, 10, 123, 20, 5, 12]);
  const emptyLList = new LList([]);
  it('minIndex is got', function() {
    assert.deepEqual(testLList.minIndex(), 5);
    assert.deepEqual(emptyLList.minIndex(), 'Linked list is empty');
  });
});

describe('getIndexOfMax', function() {
  const testLList = new LList([11, 15, 10, 123, 20, 5, 12]);
  const emptyLList = new LList([]);
  it('maxIndex is got', function() {
    assert.deepEqual(testLList.maxIndex(), 3);
    assert.deepEqual(emptyLList.maxIndex(), 'Linked list is empty');
  });
});

describe('sort', function() {
  const testLList = new LList([11, 15, 10, 123, 20, 5, 12]);
  it('sort is done', function() {
    testLList.sort();
    assert.deepEqual(testLList.get(0), 5);
    assert.deepEqual(testLList.get(3), 12);
    assert.deepEqual(testLList.get(4), 15);
    assert.deepEqual(testLList.get(6), 123);
  });
});

describe('reverse', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  it('reverse is done', function() {
    testLList.reverse();
    assert.deepEqual(testLList.get(0), 123);
    assert.deepEqual(testLList.get(3), 12);
    assert.deepEqual(testLList.get(4), 11);
    assert.deepEqual(testLList.get(6), 5);
  });
});

describe('halfReverse', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  it('halfReverse is done', function() {
    testLList.halfReverse();
    assert.deepEqual(testLList.get(0), 11);
    assert.deepEqual(testLList.get(2), 5);
    assert.deepEqual(testLList.get(3), 12);
    assert.deepEqual(testLList.get(6), 15);
  });
});

describe('clear', function() {
  const testLList = new LList([5, 10, 11, 12, 15, 20, 123]);
  it('clear is done', function() {
    testLList.addStart(56);
    testLList.addEnd(154);
    testLList.clear();
    assert.deepEqual(testLList.get(0), 5);
    assert.deepEqual(testLList.size(), 7);
  });
});
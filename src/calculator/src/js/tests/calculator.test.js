const logicFunc = require('../logic');

describe('createValue', function() {
    it('give number = 2, value = "4" , flag = false', function() {
        assert.deepEqual(logicFunc.createValue(2, '4', false), ['42', false]);
    });
    it('give number = 7, value = "1" , flag = false', function() {
        assert.deepEqual(logicFunc.createValue(7, '1', false), ['17', false]);
    });
    it('give number = 2, value = "7" , flag = false', function() {
        assert.deepEqual(logicFunc.createValue(2, '7', true), ['2', false]);
    });
    it('give number = 9, value = "0" , flag = false', function() {
        assert.deepEqual(logicFunc.createValue(9, '0', false), ['9', false]);
    });
    it('give number = 2, value = "4" , flag = false', function() {
        assert.deepEqual(logicFunc.createValue(2, '4', false), ['42', false]);
    });

});

//sum()
describe('Sum', function() {
    it('give value1 = 2, value2 = "4"', function() {
        assert.equal(logicFunc.sum(2, '4'), 6);
    });
    it('give value1 = 62, value2 = "11"', function() {
        assert.equal(logicFunc.sum(62, '11'), 73);
    });
    it('give value1 = 12, value2 = "72"', function() {
        assert.equal(logicFunc.sum(12, '72'), 84);
    });
    it('give value1 = 97, value2 = "0"', function() {
        assert.equal(logicFunc.sum(97, '0'), 97);
    });
    it('give value1 = 0, value2 = "0"', function() {
        assert.equal(logicFunc.sum(0, '0'), 0);
    });
    it('give value1 = 2.5, value2 = "11.7"', function() {
        assert.equal(logicFunc.sum(2.5, '11.7'), 14.2);
    });
    it('give value1 = 0.4, value2 = "7.1"', function() {
        assert.equal(logicFunc.sum(0.4, '7.1'), 7.5);
    });
});

//min()
describe('min', function() {
    it('give value1 = 2, value2 = "7"', function() {
        assert.equal(logicFunc.min(2, '7'), -5);
    });
    it('give value1 = 77, value2 = "13"', function() {
        assert.equal(logicFunc.min(77, '13'), 64);
    });
    it('give value1 = -12, value2 = "-72"', function() {
        assert.equal(logicFunc.min(-12, '-72'), 60);
    });
    it('give value1 = 97, value2 = "0"', function() {
        assert.equal(logicFunc.min(97, '0'), 97);
    });
    it('give value1 = 0, value2 = "0"', function() {
        assert.equal(logicFunc.min(0, '0'), 0);
    });
    it('give value1 = 12.7, value2 = "12.7"', function() {
        assert.equal(logicFunc.min(12.7, '12.7'), 0);
    });
    it('give value1 = 42.7, value2 = "7.4"', function() {
        assert.equal(logicFunc.min(42.7, '7.6'), 35.1);
    });
});


//mul()
describe('mul', function() {
    it('give value1 = 7, value2 = "2"', function() {
        assert.equal(logicFunc.mul(7, '2'), 14);
    });
    it('give value1 = 52, value2 = "12"', function() {
        assert.equal(logicFunc.mul(52, '12'), 624);
    });
    it('give value1 = 1, value2 = "7"', function() {
        assert.equal(logicFunc.mul(1, '7'), 7);
    });
    it('give value1 = -2, value2 = "-8"', function() {
        assert.equal(logicFunc.mul(-2, '-8'), 16);
    });
    it('give value1 = 0, value2 = "0"', function() {
        assert.equal(logicFunc.mul(0, '0'), 0);
    });
    it('give value1 = 2.5 value2 = "3.5"', function() {
        assert.equal(logicFunc.mul(2.5, '3.5'), 8.75);
    });
    it('give value1 = 1.1, value2 = "14.5"', function() {
        assert.equal(logicFunc.mul(42.7, '7.6'), 324.52);
    });
});

//division()
describe('division', function() {
    it('give value1 = 2, value2 = "4"', function() {
        assert.equal(logicFunc.division(2, '4'), 0.5);
    });
    it('give value1 = 40, value2 = "10"', function() {
        assert.equal(logicFunc.division(40, '10'), 4);
    });
    it('give value1 = 5, value2 = "5"', function() {
        assert.equal(logicFunc.division(5, '5'), 1);
    });
    it('give value1 = 97, value2 = "0"', function() {
        assert.equal(logicFunc.division(97, '0'), Infinity);
    });
    it('give value1 = 0, value2 = "0"', function() {
        assert.deepEqual(logicFunc.division(0, '0'), NaN);
    });
    it('give value1 = 75.6, value2 = "25.2"', function() {
        assert.equal(logicFunc.division(75.6, '25.2'), 3);
    });
    it('give value1 = 6.6, value2 = "3.3"', function() {
        assert.deepEqual(logicFunc.division(6.6, '3.3'), 2);
    });
});

describe('checkDecimal', function() {
    it('value = "2", flag = false', function() {
        assert.deepEqual(logicFunc.checkDecimal("2", false), ["2.", false]);
    });
    it('value = "23.", flag = false', function() {
        assert.deepEqual(logicFunc.checkDecimal("23.", false), ["23.", false]);
    });
    it('value = "0", flag = false', function() {
        assert.deepEqual(logicFunc.checkDecimal("0", false), ["0.", false]);
    });
    it('value = "-6", flag = false', function() {
        assert.deepEqual(logicFunc.checkDecimal("-6", false), ["-6.", false]);
    });
    it('value = "2.", flag = true', function() {
        assert.deepEqual(logicFunc.checkDecimal("2.", true), ["0", false]);
    });
});
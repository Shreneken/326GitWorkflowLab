const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    obj = {value : 4}
    it('sqrt should return 2', function() {
        calculator.calculateSquareRoot(obj)
        res = obj.value
        assert.strictEqual(res, 2);
    });
});

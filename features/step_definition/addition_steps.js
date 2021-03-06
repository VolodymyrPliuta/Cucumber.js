const assert = require('assert')
const { Before, Given, When, Then } = require('cucumber');
const Calculator = require('../../lib/calculator.js');

let calculator;

Given('the numbers {int} and {int}', function (x, y, callback) {
    calculator = new Calculator(x, y);
    callback();
});

When('they are added together', function () {
    calculator.add();
});

Then('should the result be {int}', function (expected) {
    assert.equal(calculator.getResult(), expected)
});

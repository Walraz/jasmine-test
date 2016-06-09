'use strict';

var calculator = {};

calculator.parseInput = function(num) {
  var reg = new RegExp('^\\d+$');
  if(reg.test(num)) {
    return parseInt(num);
  } else {
    return 0;
  }
  
};

calculator.add = function(a, b) {
  a = this.parseInput(a);
  b = this.parseInput(b);
  return a + b;
};

calculator.substract = function(a, b) {
  a = this.parseInput(a);
  b = this.parseInput(b);
  return a - b;
};

module.exports = calculator;
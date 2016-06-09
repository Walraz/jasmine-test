var calculator = require('../app/calculator');
require('jasmine-expect');

describe('Calculator:', function() {

  var a = '10',
      b = '10';

  describe('Adding', function() {
    it('should add two numbers', function() {
      expect(calculator.add(a, b)).toBe(20);
    });
    it('should only by an number', function() {
      expect(calculator.add(a, b)).toBeNumber();
    });
  });

  describe('Substract', function() {
    it('should substract two numbers', function() {
      expect(calculator.substract(a, b)).toBe(0);
    });
  });
});

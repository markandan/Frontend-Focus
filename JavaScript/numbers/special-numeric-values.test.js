const {divideByZero, errorArithmetic} = require('./special-numeric-values');

test('should return Infinity when divide by zero function is called', () => {
  expect(divideByZero(200)).toEqual(Infinity);
  expect(divideByZero(-200)).toEqual(-Infinity);
});

test('should return NaN when errorArithmetic function is called', () => {
  expect(errorArithmetic("String")).toEqual(NaN);
});

test('testing special values in JS and functions realted to the same', () => {
  expect(NaN === NaN).toBeFalsy();
  
  expect(isFinite(NaN)).toBeFalsy();
  expect(isFinite(Infinity)).toBeFalsy();
  expect(isFinite(39494)).toBeTruthy();
  
  expect(isNaN(NaN)).toBeTruthy();
  expect(isNaN(Infinity)).toBeFalsy();
  expect(isNaN("sdfsd")).toBeTruthy();
})
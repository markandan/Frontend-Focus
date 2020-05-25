const { roundNumber, roundWithDecimals } = require('./rounding');

test('returns the rounding number', () => {
  expect(roundNumber(100.334, 'floor')).toEqual(100);
  expect(roundNumber(-100.334, 'floor')).toEqual(-101);
  expect(roundNumber(100.334, 'ceil')).toEqual(101);
  expect(roundNumber(-100.334, 'ceil')).toEqual(-100);
  expect(roundNumber(100.334, 'round')).toEqual(100);
  expect(roundNumber(-100.334, 'round')).toEqual(-100);
  expect(roundNumber(100.334, 'trunc')).toEqual(100);
  expect(roundNumber(-100.334, 'trunc')).toEqual(-100);
});
test('returns the rounded string with decimals', () => {
  expect(roundWithDecimals(-100.336, 2)).toEqual('-100.34');
  expect(roundWithDecimals(-100.336, 1)).toEqual('-100.3');

});

const sum = require('./floating-point-precision');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adding foating point values 0.1 and 0.2 should not return 0.3', () => {
  expect(sum(0.1, 0.2)).not.toBe(0.3);
  expect(sum(0.1, 0.2)).toEqual(0.30000000000000004);
});
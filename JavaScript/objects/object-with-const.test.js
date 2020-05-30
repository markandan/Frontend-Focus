const constObj = require('./object-with-const');

test('return the update name even variable is declared as const', () => {
  expect(constObj()).toEqual('Name Updated');
});

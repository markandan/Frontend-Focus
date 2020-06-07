const compareObjects = require('./callbyreference');

test('return the result of comparing objects', () => {
  const obj1 = {
    name: 'JS Object'
  }
  
  const obj2 = {
    name: 'JS Object'
  }
  
  const obj3 = obj1;
  expect(compareObjects(obj1, obj2)).toEqual(false);
  expect(compareObjects(obj1, obj3)).toEqual(true);
});

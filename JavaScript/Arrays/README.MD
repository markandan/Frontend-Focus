# Arrays in JS
Explains the Arrays in JS

## Declaring an Array
Which of the following are valid arrays in JS?
```JS
let arr = [1, 2, 3, 4, 5];
let arr = new Array('a', 'b', 'c');
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
```

In JS, arrays can be declared using two different ways
```JS
let arr = new Array();
let arr = [];
```

Arrays can contain any types of values. Arrays can also contain mix of values. All the above declarations are valid array declaration in JS.

Arrays are zero-indexed, i.e., first element can be accessed as 
```JS
  let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
  console.log(arr[0]); // prints 'Apple'
  console.log(arr[1].name); // prints 'John'
  console.log(arr[2]); // prints true
  console.log(arr[3]); // alerts 'hello'
```

## Equality of Arrays

What will be the result of the code snippet?
```JS
let a = [1,2,3,4];
let b = [1,2,3,4];

console.log(a == b, a === b);
```

An array is a special kind of object. The square brackets used to access a property `arr[0]` actually come from the object syntax. That’s essentially the same as `obj[key]`, where arr is the object, while numbers are used as keys.

Arrays extend objects providing special methods to work with ordered collections of data and also the length property. But at the core it’s still an object.

The engine tries to store Array's elements in the contiguous memory area, one after another.

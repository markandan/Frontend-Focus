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

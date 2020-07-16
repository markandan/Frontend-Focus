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

## Queue and Stack using Array

Which data structure concept can be implement using Arrays in JS?

Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements both to/from the beginning or the end.

Stacks are based on the `LIFO` principle, i.e., the element inserted at the last, is the first element to come out of the list. Queues are based on the `FIFO` principle, i.e., the element inserted at the first, is the first element to come out of the list.

Arrays have following built-in functions 
* push()
* pop()
* shift()
* unshift()

`push()` and `pop()` methods will work with the end of the array

```JS
let a = [1, 2, 3, 4];
a.push(5);
console.log(a); // 1, 2, 3, 4, 5
a.pop();
console.log(a); // 1, 2, 3, 4
```

`shift()` and `unshift()` methods will work with the beginning of the array

```JS
let a = [1, 2, 3, 4];
a.unshift(5);
console.log(a); // 5, 1, 2, 3, 4
a.shift();
console.log(a); // 1, 2, 3, 4
```

`push()` and `unshift()` functions take `n` number of arguments and adds those to the array. 

## push() & pop() vs unshift() & shift() performance

The `shift()` & `unshift()` operation must do the following things:
* Add/Remove the element with the index 0.
* Move all elements to the left/right, 
* Renumber elements index.
* Update the length property.

The `push()` & `pop()` operation must do the following things:
* Add/Remove the element in the end.
* Update the length property.

So `push()` and `pop()` is performant compared to `unshift()` and `shift()`.

> Note: The complexity of `shift()` & `unshift()` is propotional to number of elements in the array.

## toString

What will be the output of the code snippet?
```JS
console.log([1] + 1);
console.log([1,2] + 1);
```

Arrays have their own implementation of `toString()`, it will return a string with the array values as comma separated. 

Arrays do not have `Symbol.toPrimitive`, neither a viable `valueOf`, they implement only toString conversion.

So, [] = "", [1] = "1", [1, 2] = "1,2" and so on...

If `+` sign is used along with the array, it converts the array to string and `+` acts as concatenation operator. The example given above will result in two strings `"11"` and `"1,21"`
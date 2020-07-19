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

## map() in JS

What will be output of the code snippet?

```JS
let arr =  [{ id: 1, cat: 'a'}, { id: 2, cat: 'b'}, { id: 3, cat: 'a'}];

let arr2 = arr.map(arrElement => arrElement)
console.log(arr === arr2);
arr2[0].id = 12;
console.log(arr[0].id, arr2[0].id);
```

`map()` will iterate to all the elements and returns a value. It creates a copy of any array.

`map()` will do only a shallow copy of an Array. The objects inside the array are not copied, it references the same memory location.

In the above statement, since arr and arr2 are two different copies, the first statement returns `false`. `map()` does a shallow copy, meaning the objects are referenced and not copied, so changing one Array's object will reflect in the other array as well.

> Note: Array is another type of object and it is called by reference.


## map() vs filter()

What will be output of the following code snippet?
```JS
let arr =  [{ id: 1, name: 'a'}, { id: 2, name: 'b'}, { id: 3, name: 'a'}];

let arr2 = arr.map(arrElement => {
  if(arrElement.id % 2 == 1) {
    return arrElement;
  }
})

let arr3 = arr.filter(arrElement => {
  if(arrElement.id % 2 == 1) {
    return arrElement;
  }
})
console.log(arr2, arr3);
```
`map()` will iterate to all the elements and returns a value. It creates a copy of any array.
`filter()` will filter the array based on the condition and returns only the matching records.

If condition is used in `map()` method, it returns the value based on condition and for other elements it would return `undefined`

`map()` will return an equal length as original array, while `filter()` will return the subset of the original array depending upon the condition.
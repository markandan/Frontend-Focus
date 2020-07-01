# Variable Scoping and Hoisting in JS
Explains the scoping of variables in JS

## Declaring using `var`
What will be output of the code snippet?

```JS
console.log(a);
var a = 10;
console.log(a);
console.log(b);
if(true) {
  var b = 20;
}
console.log(b);
```

By declaring the variable using `var` keyword, it declares the variable globally.

When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function.

Variables in JavaScript are, in a sense, "hoisted" (or "lifted") to the top of the function or statement. However, variables that are hoisted return a value of undefined. So even if you declare and initialize after you use or refer to this variable, it still returns undefined.

The above code will be interpreted as 

```JS
var a;
var b;
console.log(a);
a = 10;
console.log(a);
console.log(b);
if(true) {
  b = 20;
}
console.log(b)
```

So the output would be `undefined`, `10`, `undefined` and `20`.

## Declaring using `var` within the function
What will be output of the code snippet?

```JS
var a = 10;
function demo(){
  a = 30;
  console.log(a);
}
function demo2(){
  var a = 20;
  console.log(a);
}
demo();
demo2();
console.log(a);
```

When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function.

Inside `demo()` we are trying to change the value of variable `a`. JS checks whether any local variable is declared within the function, if not available, it checks the global scope and there is already a variable declared with the name `a`.

It changes the value to 30 and prints the same.

Inside `demo2()` there is a declaration of variable with same name `a`. It referes to the local variable and global variable value is not changed. It prints 20. Finally, the `console.log()` refers to the global variable and prints 30 as the value of global variable is changed in function `demo()`

> Note: We can declare a local variable with the same name as global variable. JS treats both as different.

Answer to the question is `30, 20 and 30`

## Declaring using `let`
What will be output of the code snippet?

```JS
let a = 10;
console.log(a);
if(true) {
  console.log(b);
  let b = 20;
}
console.log(b);
```

By declaring the variable using `let` keyword, the scope of the vairable is block scope, so it'll be accessible between the {} in which it is declared.

There is one key difference how this behaves between var and let/const though.

* In case of var, after creating variable definitions, before executing line by line each of the variables is initialized with the undefined value.
* In case of let/const, the initialization to undefined does not happen until the line where the declaration actually happens. And only if there is no assignment immediately. On the lines above the variable is in the Temporal Dead Zone and accessing it results in Reference Error.

One of the advantages of let over var is also pollution of global scope. When you declare a variable using var on the root level, it is automatically declared on the global object:

```JS
var foo = 42;
console.log(window.foo) //42

let var2 = 42;
console.log(window.var2) //undefined
```

In the above code, `b` is not accessible outside the if block and also before the initialization, so the value will be 10 and followed by reference error. 


## Hoisting of function

What will be output of the code snippet?

```JS
demo();
demo2();
function demo() {
  console.log("Demo")
}

var demo2 = function() {
  console.log("Demo2");
}
```

Functions like variables in JavaScript are, in a sense, "hoisted" (or "lifted") to the top of the file. Function is hoisted along with the definition of the function.

If we declare a function and assign it to a variable using `var` or `let` or `const` keyowrd, then it will be treated as a variable having a value `Function`. You will not be able to call the function declared as variable before the initialization. It'll result in error.


The above code will be interpreted as 

```JS
function demo() {
  console.log("Demo")
}
var demo2;
demo();
demo2(); //Error since demo2 is a variable and not having a value

demo2 = function() {
  console.log("Demo2");
}
```

The above code will display `Demo` in the console, followed by an Error statign demo2 is not a function.

## Variable Redeclaration

What will be the output of the following code snippet?

```JS
function demo(){
  var a = 10;
  var a = 20;
  console.log(a);
  let b = 20;
  let b = 30;
  console.log(b);
}
demo();
```

With `var`, we can redeclare a variable any number of times. If we use `var` with an already-declared variable, it’s just ignored:

With `let`, A variable should be declared only once. A repeated declaration of the same variable is an error. 

The output of the above code will result in error. It'll not even print the `console`. As the functions are hoisted, as soon as the function declaration occurs, it hoists the variables inside the function that result in error as we are trying to redeclare the variable `b` using let.

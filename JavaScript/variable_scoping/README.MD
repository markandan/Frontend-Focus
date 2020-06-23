# Variable Scoping in JS
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
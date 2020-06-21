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
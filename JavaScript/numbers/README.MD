# Numbers in Javascript
Explains concepts related to handling numbers in JS

* [Double Precision Flaoting Point Number](#Double-precision-floating-point-Numbers)
* [Special Numeric Values](#Special-Numeric-Values)


##  Double precision floating-point Numbers

0.1 + 0.2 is equal to 0.30000000000000004 and not 0.3. Yes you read it correctly, 0.1 + 0.2 is not equal to 0.3.

Numbers are the primitive values corresponding to a double-precision 64-bit binary format IEEE 754-2008 value

JS as a language isn’t broken, it’s doing floating point math. Computers can only natively store integers, so they need some way of representing decimal numbers. This representation is not perfectly accurate. This is why, more often than not, 0.1 + 0.2 != 0.3.

Programming languages which implement IEEE754 standard for arithmetic operation will have this problem... In some of the programming languages, this is solved by using different data type. Java has built-in support for arbitrary precision numbers using the BigDecimal class. 

### References
* [Wikipedia](http://en.wikipedia.org/wiki/Floating_point)
* [IEEE 754](https://standards.ieee.org/standard/754-2008.html)
* [What Every Computer Scientist Should Know About Floating-Point Arithmetic](http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)


## Special Numeric Values
```JS
var val1 = (100) / (50 - 50);
var val2 = (100 * "Hundred");
console.log(val1, val2);
```
What will be the output of the above code? To answer this we need to understand some special numeric values available in JS.

**JS have a special numeric values**

* `Infinity` (and `-Infinity`) is a special numeric value that is greater (less) than anything.
* `NaN` represents an error.

Answer to the above code is `Infinity` and `NaN` will be printed in the console.

They belong to the type `number`, but are not “normal” numbers, so there are special functions to check for them:

* `isNaN(value)` converts its argument to a number and then tests it for being NaN
* `isFinite(value)` converts its argument to a number and returns true if it’s a regular number, not `NaN/Infinity/-Infinity`

> Note: We will not be able to compare two `NaN` values. ( `NaN === NaN` will return false)

### Special Functions Truth table:
```JS
NaN === NaN; // false

isFinite(NaN); // false
isFinite(Infinity); // false
isFinite(39494); // true

isNaN(NaN); // true
isNaN(Infinity); // false
isNaN("sdfsd"); // false
  ```

> Note: Please refer to examples in `special-numeric-value.js` and test in `special-numeric-value.test.js`

> Codepen link for the special values can be accessed [here](https://codepen.io/markandan/pen/xxwmyaO)

### References
* [ECMA Script - isFinite](http://www.ecma-international.org/ecma-262/6.0/#sec-isfinite-number)
* [ECMA Script - isNaN](http://www.ecma-international.org/ecma-262/6.0/#sec-isnan-number)
* [Mozilla MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)


## Binary, Hexadecimal and Octal numbers

```JS
let a = 0b11111111;
let b = 0o377;
let c = 0xff;

console.log(a === b);
console.log(a === c);
console.log(b === c);
```

In JS, a number can be assigned to one or more of the following number values

* Binary
* Hexadecimal
* Octal 

Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things. So naturally, there exists a shorter way to write them: 0x and then the number. 

> Note: 0xFF is same as 0xff, the case doesn't matter.

Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

### Examples of different number values

```JS
let a = 0b11111111; //binaryValue
let b = 0o377; //OctalValue
let c = 0xff; //Hexa Value

console.log(a === b);
console.log(a === c);
console.log(b === c);

```

Since all the values are stored as numbers, the output of the example is always `true, true and true`

There are only 3 numeral systems with such support. For other numeral systems, we should use the function `parseInt`.

### toString(base) function

The method `num.toString(base)` returns a string representation of num in the numeral system with the given `base`.

```JS
let num = 255;
console.log(num.toString(2)); // '11111111'
console.log(num.toString(16)); // 'ff'
console.log(num.toString(8)); // '377'
```

The base can vary from `2 to 36`. By default it’s `10`.

> `base=36` is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number.

### parseInt(str [, radix]) and parseFloat(str) methods

`parseInt` and `parseFloat` are the methods used to convert the data to the number.


They "read" a number from a string until they can’t. In case of an error, the gathered number is returned. The function parseInt returns an integer, whilst parseFloat will return a floating-point number:

```JS
console.log (parseInt('50px')); // 50

console.log (parseInt('50asf')); // 50

console.log (parseInt('50.9')); // 50 will return only the integer part of a number

console.log (parseFloat('50.8px')); // 50.8

console.log (parseFloat('50.8.4')); // 50.8, stops the reading from the second point

console.log(parseInt('aa19')) // NaN

console.log(parseFloat('aa19')) // NaN
```

#### The second argument of parseInt(str, radix)

The parseInt() function has an optional second parameter. It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:

``` JS
console.log( parseInt('ff', 16) ); // 255

console.log( parseInt('377', 8) ); // 255
```
> Note: parseFloat doesn't have the second parameter.

* [Mozilla MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

* [ECMA Script - parseFloat](http://www.ecma-international.org/ecma-262/6.0/#sec-parsefloat-string)

* [ECMA Script - parseInt](http://www.ecma-international.org/ecma-262/6.0/#sec-parseint-string-radix)
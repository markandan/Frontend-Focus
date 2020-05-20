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
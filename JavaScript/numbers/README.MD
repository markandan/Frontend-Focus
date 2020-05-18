# Numbers in Javascript
Explains concepts related to handling numbers in JS

##  Double precision floating-point Numbers

0.1 + 0.2 is equal to 0.30000000000000004 and not 0.3. Yes you read it correctly, 0.1 + 0.2 is not equal to 0.3.

Primitive value corresponding to a double-precision 64-bit binary format IEEE 754-2008 value

JS as a language isn’t broken, it’s doing floating point math. Computers can only natively store integers, so they need some way of representing decimal numbers. This representation is not perfectly accurate. This is why, more often than not, 0.1 + 0.2 != 0.3.

Programming languages which implement IEEE754 standard for arithmetic operation will have this problem... In some of the programming languages, this is solved by using different data type. Java has built-in support for arbitrary precision numbers using the BigDecimal class. 

### References
* [Wikipedia] (http://en.wikipedia.org/wiki/Floating_point)
* [IEEE 754] (https://standards.ieee.org/standard/754-2008.html)
* [What Every Computer Scientist Should Know About Floating-Point Arithmetic] (http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)
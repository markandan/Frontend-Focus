# Objects in Javascript
Explains concepts related to handling objects in JS

* [Objects with constant](#Objects-with-constants)

##  Objects with constants

What will be the output of the following code snippet?

```JS
const user = {
  name: "Name"
};

user.name = "Name Updated";

console.log(user.name);
```

Objects are used to store keyed collections of various data and more complex entities.

An Object declared as a `const` can be modified.

`const` fixes the value of the object, but not its contents. The following code will result in error.

```JS
const user = {
  name: "Name"
};

user.name = "Name Updated"; // No error as the content is changed
console.log(user.name); // returns Name Updated
user = {
  name: "Updated"
} // There will be an error
```

## Objects with square brackets

What are the valid ways to access propeties with multiple words

```JS
let obj = {
  "first name" : "Javascript"
};
```
Multiple words properties are not accessible through a dot access. This will result in an error.

The dot required a valid variable identifier (without spaces, doesn't start with a digit $ and _ are only special characters allowed)

To access the property with multiple words, we can use one of the following

Square bracket Notation is used to access the property with multiple words

```JS
console.log(obj["first name"]);
```

Square notation takes any string value. Square brackets also provide a way to obtain the property name as the result of any expression.

```JS
let key = "first name";
console.log(obj[property]);
```
Here, the variable `key` may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.

> Note: The `dot` notation doesnot accept the expression. Only square brackets does accept the expression

### Square brackets and computed properties

We can use square brackets in creating an onject which is called `computed properties`.

```JS
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
```

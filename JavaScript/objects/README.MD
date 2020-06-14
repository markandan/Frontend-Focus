# Objects in Javascript
Explains concepts related to handling objects in JS

* [Objects with constant](#Objects-with-constants)
* [Objects with square brackets](#Objects-with-square-brackets)
* [Property name Limitations](#Property-name-Limitations)
* [Call by Reference](#call-by-reference)
* [Object cloning](#Object-cloning)

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


## Property name Limitations

What will be the output of the following code snippet?

```JS
let obj = {
  for: 1,
  let: 2,
  return: 3,
  __proto__: 10
};

console.log(obj.for, obj.let, obj.return, obj.__proto__);
```

As we know, a variable cannot have a name equal to one of language-reserved words like “for”, “let”, “return” etc.

But for an object property, there’s no such restriction.

In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).

Other types are automatically converted to strings.

```JS
let obj = {
  0: "Hello"
};

console.log(obj[0], console.log(obj["0"])); // both will access the property and print "Hello"

```

In the above example, a number `0` becomes a string `"0"` when used as a property key. Also can use number or a string to access the object key

Only restriction is the special property `__proto__` cannot have non-object values. Even if you assign non-object values for the property, it will be discarded.


## Call by Reference

What will be output of the following code?

```JS
let obj1 = {
  name: 'JS Object'
}

let obj2 = {
  name: 'JS Object'
}

let obj3 = obj1;

console.log(obj1 == obj2, obj1 === obj2, obj1 == obj3, obj1 === obj3);
```

Objects are called by reference in JS. When an object variable is copied – the reference is copied, the object is not duplicated.

In the example, if we change, the value of `obj3`

```JS
let obj1 = {
  name: 'JS Object'
}

obj3 = obj1;
obj3.name = 'Updated';
console.log(obj1.name, obj3.name);
```

This will print `Updated` for both obj1.name and obj3.name as in JS the objects are called by reference.

We will not be able to compare two objects, even though both the objects key and value are similar. In the example given, `obj1` and `obj2` have similar key and values, but if we check equality it will return false. 

If we compare the objects, when the value is assigned from the another object, it will return true as both point to the same reference.

## Object cloning

What will be the output of the following code snippet?

```JS
let obj1 = {
  name: "JavaScript",
  address: {
    street: "Street",
    country: "India"
  }
}
let clone = Object.assign({}, obj1);
clone.address.street = "Street Updated";
console.log(obj1.address.street, clone.address.street);
```
`Object.assign()` creates a clone of the object. 
**Syntax**
> Object.assign(dest, src1, src2, src3...)

* The first argument dest is a target object.

* Further arguments src1, ..., srcN (can be as many as needed) are source objects. It copies the properties of all source objects src1, ..., srcN into the target dest. In other words, properties of all arguments starting from the second are copied into the first object.

`Object.assign()` doesnot create a deep clone. Means, if a key contains an object as value, it does not create a copy rather, the reference is copied.

In the example given, address is an object value and the reference is copied, so both the values are changed and `Street Updated` will be printed for both.

## Object.preventExtensions()

What will be the output of the code snippet? 
Assumption: Not running in `strict` mode
```JS
let obj = {
  name: 'JS'
};
Object.preventExtensions(obj);
obj.age = 12;
delete obj.name;
console.log(obj);
```

Object.preventExtensions makes it impossible to add properties to an Object.

If we add after calling `preventExtensions` method, it will fail silently in sloppy mode.

> Note: If we try to add a property after calling preventExtensions method in strict mode, it results in error.

You will be able to delete the property though.

> Note: After deleting the key, its not possible to add it back again.
# Objects in Javascript
Explains concepts related to handling objects in JS

* [Objects with constant](#Objects-with-contants)

##  Objects with contants

What will be the ourput of the following code snippet?

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
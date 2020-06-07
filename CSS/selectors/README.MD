# Selectors

* [Universal Selector](#Universal-Selector)
* [Type Selector](#Type-Selector)
* [Class Selector](#Class-Selector)
* [ID Selector](#ID-Selector)
* [Combination & Descendent Selector](#Combination-and-descendent-Selector)
* [Descendent Selector](#Descendent-Selector)

What will be color applied to the div in the following code?

```CSS
* {
  color: orange;
}
#box1 {	
  color: blue;
}
div {
  color: green;
}
.box {
	width: 200px;
	height: 200px;
	color: red;
}

```
```HTML
<div class="box" id="box1">Content comes here</div>
```

Before answering the question, lets understand what is a CSS Selector.

In CSS, pattern matching rules determine which style rules apply to elements in the document tree. These patterns, called selectors.

Following are the types of selectors available

* Universal Selector
* Type Selector
* Class Selector 
* ID Selector
* And many more.... (will be covered later)

## Universal Selector
Universal selector is like a wildcard selecting every element in document tree.

```CSS
* {
   box-sizing: border-box;
}
```

Sets all the elements box-sizing to border-box

## Type Selector
A type selector matches the name of a document language element type. A type selector matches every instance of the element type in the document tree.

To apply margin of 10px all the <div> elements, 

```CSS
div {
	margin: 10px;
}
```

## Class Selector

A Class selector matches all the elements based on a class attribute. A CSS class selector contains a "." immediately followed by the ID value, which must be an identifier

```HTML
<div class=”container”>Content Comes here </div>
<p class=”container”>Paragraph content </p>
```

To change the color of the content with the class “container”

```CSS
.container {
    color: blue;
} 
```

The above code changes the color of both `<div>` and `<p>` elements as both have the same class.

## ID Selector
CSS ID selectors match an element instance based on its identifier. A CSS ID selector contains a "#" immediately followed by the ID value, which must be an identifier

> Note: Semantically IDs are Unique in an HTML document


To set the background of the element with attribute ID as container, we need to write

```CSS
#container {
   background-color: #CCCCC;
}
```

```HTML
<div id=”container”>Container with ID </div>
```

The following list of selector types is by increasing specificity:
* Universal selectors (i.e., *) 
* Type selectors (eg., div)
* Classes (e.g., .example) 
* ID selectors (e.g., #example)
* Inline styles (e.g <h1 style=”color : red;”></h1>)
* h1{ color : red !important; }


| Selector  | Applied Elements |
|---|---|
|Universal Selector| All Elements in the DOM|
|Type Selectors| All Elements of the type present in the DOM|
|Class Selectors| All Elements having the class specified |
|ID Selector|One element to which ID is associated|


```CSS
* {
  color: orange;
}
#box1 {	
  color: blue;
}
div {
  color: green;
}
.box {
	width: 200px;
	height: 200px;
	color: red;
}
```
```HTML
<div class="box" id="box1">Content comes here</div>
```

Above code snippet color will be blue as ID having more precedence than anything else in the given code

## Combination and Descendant Selectors

What will be color of the <div> and <p> in the Code block 1 and color of <div> and <p> in the Code block 2

```CSS
body {
  color: green;
}
div.container {
  color: blue;
}

.parent .box{
  color: orange;
}

```
```HTML
<!-- Code Block 1-->
<div class="container">Content</div>
<p class="container">Content</p>
<!-- End of Code Block 1-->


<!-- Code Block 2-->
<div class="parent">
    <div class="box">Content</div>
    <div>
      <p class="box">Content</p>
    </div>
</div>
<!-- End of Code Block 2-->
```

We can combine type selector and the class selector to restrict the matches to elements of the type with a class mentioned.

If we have type selector followed by the class selector (`Without Spaces`), the type of element with the class only be selected and the values are applied to that element. 

In the example given in Code block 1, only `<div>` content will be of color `blue`, `<p>` will inherit from the body color green. `div.container` selects all `div` elements with class `.container`

## Descendant Selector

The descendant selector or, more accurately, the descendant combinator lets you combine two or more selectors so you can be more specific in your selection method

The color orange will be applied to both `<div>` and `<p>` tags as they both have the class `.box` which is a child element of `.parent`

> Note: There is space between ID selector and a class.

It’s worth noting that the `.box` element doesn’t have to be an immediate child, it can be any levels deep, still the border style would be applied

## Difference between Child Selector and a Descendant selector

In the following code snippet, what will be background applied to second div with the class `.box`

```CSS
#container > .box {
  background-color: red;
  width: 200px;
  height: 200px;
}
```
```HTML
<div id="container">
  <div class="box">Content 1</div>
  <div>
  	  <div class="box">Content 2</div>
  </div>
</div>
```

A child selector is similar to a descendant selector, except it only targets immediate child elements. A child selector is denoted by the symbol `>`.

> There is a difference between the descendant selector and the child selector. Descendant selector element doesn’t have to be an immediate child, it can be any levels deep, still the border style would be applied. Child selector targets inly the immediate child items.

## Sibiling and Adjacent Sibling Selector

What will be the color of the paragraphs and list items in the following code snippet?

```CSS
body {
  color: black;
}
h2 ~ p {
   color: blue;
}
li + li {
  color: red;
}
```
```HTML
<h2>Title</h2>
<p>Paragraph 1.</p>
<p>Paragraph 2.</p>
<p>Paragraph 3.</p>
<div class="box">
  <p>Paragraph 4.</p>
</div>
<ul>
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ul>
```

To answer this question we need to understand the Sibiling and Adjacent selectors

### Sibling Selector

A sibling selector matches elements based on sibling relationships. That is to say, the selected elements are beside each other in the HTML.

Sibling selectors are denoted by `"~"`

In the example provided, the first three paragraphs will be of color blue, as they are the siblings of `<h2>`. Last Paragraph will be of `body` color (black) as it is not a sibling to `<h2>`.


### Adjacent Sibling Selector

An Adjacent sibling selector is similar to general sibling selector. The difference is that the targeted element must be an immediate sibling, not just a general sibling.

In the example provided, the second and third list item will be of color red, as they are the adjacent siblings. First list item is not an adjacent sibiling to another `li` so color red will not be applied

Adjacent Sibling selectors are denoted by `"+"`.

## nth-child and nth-of-type

Which child items will be of color blue in the following code snippet?

```HTML
<div>
  <p>Child 1</p>
  <p>Child 2</p>
  <p>Child 3</p>
  <div>Child 4</div>
  <p>Child 5</p>
</div>
```
```CSS
div p:nth-child(3) {
  color: blue;
}
div p:nth-of-type(4) {
  color: blue;
}
```

There are two Pseudo classes used in the example. We need to understand the difference to answer the question.

The `nth-child()` pseudo-class is used to match an element based on a number, which represents the element’s position amongst it’s siblings. The `:nth-child()` selector in CSS is used to match the elements based on their position in a group of siblings. It matches every element that is the nth child.

The `nth-of-type()` in CSS Selector is used to style only those elements which are the nth number of child of its parent element. 

Both `nth-child()` and `nth-of-type()` takes a argument, that represents the pattern for matching elements. It can be odd, even or in a functional notation and selects the child element based on the argument.

* **odd:** It represents elements whose position is odd in a series: 1, 3, 5, etc.
* **even:** It represents the elements whose position is even in a series: 2, 4, 6, etc.
* **functional notation (<An+B>):** It represents elements whose position of siblings matches the pattern An+B, for every positive integer or zero value of n.

> Note: There is no difference between `nth-child` and `nth-of-type` when all the siblings is of same type.

In the example, Child 3 and Child 5 will be of color blue.

p:nth-child(3) will select the 3rd child which is `<p>` item.
p:nth-of-type(4) will select the 4th `<p>` element which is Child 5 in the given example.

> Note: p:nth-child(4) will not affect any element (in the given example) as `<p>` is not the fourth child of the parent `<div>`

There are few similar pseudo classes
* first-child
* fitst-of-type
* last-child
* last-of-type
* nth-last-child
* nth-last-of-type
* only-child
* only-of-type

To read more use the [Mozilla MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
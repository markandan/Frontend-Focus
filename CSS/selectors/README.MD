# Selectors
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

### References 

* [Mozilla MDN (Margin)](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
* [Mozilla MDN (Padding)](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
* [W3C (Margin)](https://www.w3.org/TR/css-box-3/#margins)
* [W3C (Padding)](https://www.w3.org/TR/css-box-3/#paddings)

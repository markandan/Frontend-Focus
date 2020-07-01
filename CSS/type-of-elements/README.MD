# Type of Elements

## inline elements

What will be the width of the span in the code snippet?

```CSS
span {
  width: 200px;
  background: red;
}
div {
  width: 500px;
}
```
```HTML
<div>
<span>Lorem Ipsum</span>
</div>
```
`<span>` is an inline HTML element.

`inline` elements as a name suggests are those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content.

The width and height are not respected. The width would be always equal to the content width for all `inline` elements.

## block elements

What will be the alignment of the divs?

```CSS
div {
  width: 200px;
  border: 1px solid black;
}
```
```HTML
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
```

`div` is the HTML block element.

By default, a `block` element occupies the entire space of its parent element (container), thereby creating a "block". It breaks the flow of the content. Browsers typically display the block-level element with a newline both before and after the element. You can visualize them as a stack of boxes.

Block elements also respect the width and height properties. So the width of the element would be 200px, but each element blocks the entire line, so everything comes one after the other. Each will start against the start edge of the containing block. So, there'll be space to the right of the element

Vertical margins of the block elements are collapsed and its called `margin collapsing`. Please refer [here](https://github.com/markandan/Frontend-Focus/tree/master/CSS/collapse-margin)
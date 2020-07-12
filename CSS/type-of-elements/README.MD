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

## padding and margin for inline elements

Will the padding and margin be applied for the span in the code block?
```CSS
span {
  padding: 20px;
  margin: 20px;
}
div {
  width: 200px;
}
```
```HTML
<div>
  Lorem ipsum dolor <span>sit amet</span>, consectetur adipiscing elit. Aliquam quis convallis lectus. Nam ligula elit, vestibulum pharetra vehicula sed, placerat sed felis. Nunc sed lorem ut urna pellentesque gravida vel eu est. Vestibulum volutpat euismod mattis. Pellentesque nec suscipit nibh. Nullam hendrerit et nibh ut placerat. Duis sit amet pharetra ipsum. Curabitur lacinia aliquam gravida.
</div>
```
`inline` elements as a name suggests are those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content.

When it comes to margins and padding, browsers treat inline elements differently. You can add space to the left and right on an inline element, but you cannot add height to the top or bottom padding or margin of an inline element.

The padding on the top and bottom of the `inline` elements will be applied, but the flow will not break, causing the elements to overlap each other.

When an `inline` box is split across more than one line, it’s still logically a single box. This means that any horizontal padding, border, or margin is only applied to the start of the first line occupied by the box, and the end of the last line.

Int he above example, the highlighted span is split across 2 lines. Its horizontal padding doesn’t apply to the end of the first line or the beginning of the second line. Also, any vertical padding, border, or margin applied to an element will not push away elements above or below it. The content will be overlapped in the second line

## inline-block elements

What will be the width of the span in the code snippet?

```CSS
span {
  width: 200px;
  background: red;
  display: inline-block;
}
div {
  width: 500px;
}
```
```HTML
<div>
<span>Lorem Ipsum</span>More content
</div>
```

We can change the type of element to `inline-block` using the `display` property.

`inline-block` as the name suggested inhertis some properties from inline and some from block.

It honors the width, padding, and margin and push the content, similar to `block` elements, does not add a line-break after the element, so the element can sit next to other elements. That means, the content will follow the `inline-block` elements.

## inline-block white spacing issue

What will be the alignment of the boxes in the code snippet?
```CSS
.box {
    width: 25%;
    display: inline-block;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    height: 100px;
    background: green;
}
```
```HTML
<div class="container">
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
   <div class="box"></div>
</div>
```
`inline-block` elements add some white-space at the end of each element. This results in some pixels (4px mostly, but depends on the browser settings for white-space) for each element. The output of the example would be, three boxes align horizontally and one box comes in the second row

To resolve the whitespace, there are several workarounds. To read more about the white spaces, click [here](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace)
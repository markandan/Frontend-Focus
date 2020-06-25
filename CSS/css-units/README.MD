# CSS Units

* [em vs rem](#em-vs-rem)
* [percentage vs vw](#percentage-vs-vw)

## em vs rem

What will be the font-size of the child1 and child2?

```HTML
<div class="parent">
  <div class="child1">Content 1</div>
  <div class="child2">Content 2</div>
</div>
```
```CSS
body {
  font-size: 16px;
}
.parent {
  font-size: 14px;
}
.child1 {
  font-size: 1.5em;
}
.child2 {
  font-size: 1.5rem;
}
```

`em` and `rem` are both relative units

`em` is relative to parent (or to the element for which the font-size is set in hierarchy)
`rem` is relative to the root element (HTML)

In the example, the output will be 21px and 24px for child1 and child2 respectively.

> Note: `em` and `rem` will return same value if any of the elements other than the root element doesnot have a `font-size` attribute


## percentage vs vw

What will be the width of the child1 and child2?

```HTML
<div class="parent">
  <div class="child1 child">Content 1</div>
  <div class="child2 child">Content 2</div>
</div>
```
```CSS
.parent {
  width: 100px;
}
.child {
  height: 100px;
  background: green;
}
.child1 {
  width: 100%
}
.child2 {
  width: 100vw;
}
```

`%` and `vw and/or vh` are both relative units

`%` is relative to parent 
`vw` and `vh` are relative to the viewport. `vw` represents viewport width and `vh` represents viewport height.

In the example, the output will be 200px and width of the viewport for child1 and child2 respectively.

> Note: `percentage` and `vw` will be same if the parent is element is a block element and no width set for parent element.

## vmin and vmax
What will be the 1vmin and 1vmax values of the viewport 1024px wide x 768px height?

`vmin` and `vmax` are the units related to viewport

`vmin` uses the browser height or width whichever is smaller. If the height of the browser window is less than its width, 1vmin will be equivalent to 1vh. If the width of the browser is less than it’s height, 1vmin is equvialent to 1vw.

`vmax` uses the browser height or width whichever is greater. If the height of the browser window is greater than its width, 1vmin will be equivalent to 1vh. If the width of the browser is greater than it’s height, 1vmin is equvialent to 1vw.

> Note: `vmin` and `vmax` is an excellent substitute for, or addition to, CSS orientation media queries, since they respond immediately to the aspect ratio of the screen

One usecase would be setting the font size of the header. Measured in vmin, the size of the header text won’t get larger or smaller in a fully-expanded browser that is narrowed, since the unit responds to viewport height. 

Answer to the question is 1vmin = 1% of the 768px and 1vmax = 1% of 1024px.

## Absolute units
What are the valid absolute CSS Units?
* px
* pc
* cm
* mm
* all of the above

Units that are `absolute` are the same size regardless of the parent element or window size.  Absolute units can be less favourable for responsive sites because they don't scale when the screen size changes.

Following are the absolute units available in CSS

| Unit  | Name | Equivalent to | Example |
|---|---|---|---|
|px|Pixels|1px = 1/96th of 1 inch(96px = 1 inch) |font-size: 12px;|
|pt|Points|1/72 of 1 inch (72pt = 1 inch)|font-size: 12px;|
|pc|picas|12pt = 1pc|font-size: 1.2pc;|
|mm|Millimeter|1mm = 1/10th of 1cm|font-size: 4mm;|
|cm|Centimeter|1cm = 96px/2.54|font-size: 0.5cm;|
|in|Inches|1in = 2.54cm = 96px|font-size: 0.2in;|

Pixels (px) are typically the most popular absolute unit for screens. Centimeters, millimeters, and inches are more common for print and you may not have even known they were options!

### References
* [Mozilla MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

## percentage values in height and width

What will be the height and width of div in the code snippet

```CSS
div {
  width: 100%;
  height: 100%;
}
```
```HTML
<html>
  <body>
    <div>Content</div>
  </body>
</html>
```
`%` is relative to parent.

By default width of a block element is 100% of the screen width

The percentage is calculated with respect to the height of the generated box's containing block. If the height of the containing block is not specified explicitly, and this element is not absolutely positioned, the value computes to 'auto' (i.e., it depends on content height). A percentage height on the root element is relative to the initial containing block.

To make the `div` take 100% of the window using percentage value, then we need to give `height: 100%` for all the elements starting from root element, (ie.,`html`, `body`, etc...). Following code will set the div's height to 100% of screen height

```HTML
<html>
  <body>
    <div>Content with 100% of window height</div>
  </body>
</html>
```

```CSS
html, body, div {
  height: 100%;
}
```
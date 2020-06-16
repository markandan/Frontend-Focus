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
  width: 200px;
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

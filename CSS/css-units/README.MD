# CSS Units

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

> Note: `em` and `rem` will return same value if any of the elements other than the root element have a `font-size` attribute
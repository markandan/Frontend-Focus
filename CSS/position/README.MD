# CSS Position property

## absolute vs fixed

Looking at the code snippet, explain how the box1 and box2 be positioned

```CSS
.container {
  position: relative;
}
.box {
  height: 100vh;
  top: 0;
  left: 0;
}
.box1 {
  position: fixed;
}
.box2 {
  position: absolute;
}
```

```HTML
<div class="container">
  <div class="box1 box">Box 1
  </div>
  </div class="box2 box">Box 2
</div>
```

`position: fixed` will always be based on the window, irrespective of where the element is present in the DOM
`position: absolute` will be based on the closet relative parent, irrespective of where the element is present within the relative parent

Both `position: fixed` and `position: absolute` removes the element fro the normal flow and renders on top of the other elements.

> Note: Other elements will follow the normal flow. Fixed/Absolute positioned elements will be on top of the other elements, reuslting content hiding below these elements. We ened to adjust using padding/margin for the overlapped content to be visile



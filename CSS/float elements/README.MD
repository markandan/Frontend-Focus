# Float

## Simple float 

How the text would be aligned in the following code snippet?

```CSS
.float {
  float: left;
  width: 100px;
  height: 100px;
  background: green;
}
```
```HTML
<div class="float"></div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. </p>
    
<p>Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<p>Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>
```


The element with the float set on it (the `<div>` element in this case) is taken out of the normal layout flow of the document.
It will be stuck to the left-hand side of its parent container (`<body>`, in this case). 

Any content that comes below the floated element in the normal layout flow will now wrap around it, filling up the space to the right-hand side of it as far up as the top of the floated element. There, it will stop and then the normal flow would continue.

## Parent height with floating children inside

What will be height of `parent` in the code snippet?

```CSS
.float{
  float:left;
  width: 200px;
  height: 200px;
}
```
```HTML
<div class="parent">
  <div class="float">
    Floating Element 1
  </div>
  <div class="float">
    Floating Element 2
  </div>
  <div class="float">
    Floating Element 3
  </div>
</div>
```

The element with the float set on it (the `<div>` element in this case) is taken out of the normal layout flow of the document.

All elements will have a default height of content height by default (if height is not specified). Since the floating elements are taken out of normal flow, the parent content would be literally empty, so the height of the parent would be 0px.

There are several ways by which the issue can be fixed.

In the above example, if we add one of the following code, the height of the parent issue will be resolved

* setting the `overflow` proprty for the parent container
```CSS
.parent{
  overflow: auto;
}
```

* clearing the float

```CSS
.float{
  float:left;
  width: 200px;
  height: 200px;
}
.clear {
  clear:both; /* clears the float */
}
```

```HTML
<div class="parent">
  <div class="float">
    Floating Element 1
  </div>
  <div class="float">
    Floating Element 2
  </div>
  <div class="float">
    Floating Element 3
  </div>
  <div class="clear">
</div>
```
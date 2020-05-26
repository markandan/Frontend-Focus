# Borders
What will be the color of the borders in the following code snippet?

```CSS
body {
  color: green;
}
.box {
  color: orange;
	width: 200px;
	height: 200px;
  background: #CCC;
  border: 2px solid;
}
.box2 {
	width: 200px;
	height: 200px;
  background: #CCC;
  border: 2px solid;
}
.parent {
  color: red;
}
.box3 {
	width: 200px;
	height: 200px;
  background: #CCC;
  border: 2px solid;
}
```
```HTML
<div class="box"></div>
<div class="box2"></div>
<div>
  <div class="box3"></div>
</div>
```


The border of a box, outside the padding and content area, and inside the margin

The `border` CSS property is the combination of `border-width`, `border-style` and `border-color`

Out of which `border-color` is optional, other two are mandatory

`border-color` inherits from the `color` property of the element's containing block. The containing block is the ancestor to which the `color` property is set.

> Note: If we want different width, style or color for the border, we need to specify it separately. `border-width`, `border-style` and `boder-color`. Similar to [margins](https://github.com/markandan/Frontend-Focus/tree/master/CSS/margins-padding) each of these property can have one, two, three or four values. The logic of how the value is applied would be same as margin/padding

In the example provided, the colors would  ***orange, green and red***

## border-width

It can have one of the following values as a valid

* <length>  (10px, 10%, 1em, etc..)
* thin 
* medium 
* thick

## border-style

Possible values for the border-style property are

* solid
* dotted
* dashed
* double
* groove
* ridge
* inset
* outset

## border-color

It takes any one of the valid color values

### References 

* [Mozilla MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
* [W3C](https://www.w3.org/TR/css-box-3/#borders)

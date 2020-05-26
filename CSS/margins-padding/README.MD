# Margins & Padding
What will be the right margin value applied to the boxes in the given example

```CSS
.box {
	width: 200px;
	height: 200px;
	background: #CCC;
}
.box1 {	
  margin: 20px;
}

.box2 {	
  margin: 20px 10px;
}

.box3 {
  margin: 20px 10px 5px;
}

.box4 {
  margin: 20px 10px 5px 20px;
}
```
```HTML
<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>
<div class="box box4"></div>
```

A `margin` is the space outside something, whereas `padding` is the space inside something.

The margin of a box, outside the border, padding, and content areas.

The `margin` CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

The `margin` property can contain one/two/three/four values. Values can be positive or negative value.

* If one value is provided, then the same value is applied in **all the sides**.
* If two values are provided then first value is applied to **Top and Bottom**, the second value is applied to **Left and Right.**
* If three values are provided, first value is applied to **Top**, second value is applied to **Left and Right** and the htirs value is applied to the **Bottom** side
* If four values are provided, then the values are applied in the order of **Top, Right, Bottom & Left**

In the example provided, the applied margins will be ***20px, 10px, 10px, and 10px***

> Note: Same logic applied to padding, and border-width and in same order.. All the properties `margin`, `padding`, `border-width`, `border-style` and `border-color` are shorthand for **top, right, bottom and left** values

> Note: The content width depends on the `box-sizing` property. Please refer [box-model](https://github.com/markandan/Frontend-Focus/tree/master/CSS/box-model) explained earlier.

### References 

* [Mozilla MDN (Margin)](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
* [Mozilla MDN (Padding)](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
* [W3C (Margin)](https://www.w3.org/TR/css-box-3/#margins)
* [W3C (Padding)](https://www.w3.org/TR/css-box-3/#paddings)

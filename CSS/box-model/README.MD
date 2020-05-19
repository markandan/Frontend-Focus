# Box Model in CSS
What is the computed width of the box in the code?

```CSS
.box {
  width: 200px;
  height: 200px;	
  padding: 20px;
  border: 5px solid green;
  margin: 10px;
}
```
Before answering the question, we need to first understand the css box model.

Every element is rendered as a box in the webpage.

Every box is composed of four parts (or areas), defined by their respective edges: the content edge, padding edge, border edge, and margin edge.

![Image Source](https://www.w3.org/TR/css-box-3/images/box.png)
<p align='center'>Image Source: W3C</p>

The box model properties that alter the shape of the box are:
* width
* height
* padding
* border

By default, the computed width of the element is calculated by the sum of the width of the content, horizontal padding (both left and right) and horizontal border (left and right). Similarly computed height of the element is calculated by the sum of the height of the content, vertical padding and borders (top and bottom)

> Note: Margins are not included in the computed width but there will be spacing outside the box.

In the example,computed width of the box is **250px** *(200px - content width + padding 40px (20px each on left and right) + border- 10px (5px each on left and right)*

In the example,computed height of the box is **250px** *(200px - content width + padding 40px (20px each on top and bottom) + border- 10px (5px each on top and bottom)*

## box-sizing Property

Can we have the box computed width equal to the width set in CSS?

To achieve that, we need to use the `box-sizing` property

box-sizing property takes one of the two values `content-box` or `border-box`.

Default value of the box-sizing property is content-box, meaning the width set will be applied only to the content. Padding and borders are added on top of the content width.

If we use border-box as a value for the box-sizing property, then the padding and borders are included within the width provided.

In the example if we set the box-sizing property to border-box:
```CSS
.box {
	width: 200px;
	height: 200px;
	padding: 20px;
	border: 5px solid green;
	margin: 10px;
	box-sizing: border-box;
}
```

Then the computed width will be **200px** *(20px padding and 5px border is applied on all sides as well. But the content width would be only 150px as the padding and border is included within the width of 200px)*

### References 

* [W3C](https://www.w3.org/TR/css-box-3/)
* [Mozilla MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
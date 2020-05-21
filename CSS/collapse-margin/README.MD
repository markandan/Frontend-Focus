# Collapsing Margin
What is the computed width of the box in the code?

```CSS
.box {
	margin:20px;
}
```
```HTML
<div class=”box”>Box 1</div>

<div class=”box”>Box 2</div>

```
Before trying to answer the question ,we should first understand how margin works.

Accoding to W3C, In CSS, the adjoining margins of two or more boxes (which might or might not be siblings) can combine to form a single margin. Margins that combine this way are said to collapse, and the resulting combined margin is called a **collapsed margin**.

Vertical margins of two elements are touching, only the margin of the element with the largest margin value will be honored, while the margin of the element with the smaller margin value will be collapsed to zero.

> Note: Horizontal margins never collapse.

We can understand better with few examples

### Example # 1 (Different Margin Values)
```CSS
div {
	margin-bottom: 10px;
}
p {
	margin-top:5px;
}
```
```HTML
<div>Hello</div>
<p>Paragraph</p>
```

In this example, the margin which is greater is taken (`ie., 10px`) and the smaller margin(`5px`) is collapsed to zero

### Example # 2 (One of the margin is a negative margin)

```CSS
div {
	margin-bottom: 10px;
}
p {
	margin-top: -5px;
}
```

```HTML
<div>Hello</div>
<p>Paragraph</p>
```

If one margin is negative and other is positive, then the negative value is deducted and the resultant margin would be applied as a space between elements. In this case, only 5px will be available `(10px - 5px)`. 

> Note: If the value results in negative then it results in elements being overlapped against each other.

### Example # 3 (Both have equal margins (Question in the beginning))
```CSS
.box {
	margin:20px;
}
```
```HTML
<div class=”box”>Box 1</div>

<div class=”box”>Box 2</div>
```

Here, the space between two elements would be **`20px`** as both the margins are similar.

Collapsing effect holds true for parents and children whose margins touch. By “touch”, we mean the places at which no padding, borders, or content exist between the adjacent margins

### Example # 4 (Parent Child Margins)
```CSS
h1 {
  margin-bottom: 40px;
}
div {
  margin-top: 40px;
}
p {
  margin-top: 20px;
}
```

```HTML
<h1>Sample</h1>
<div>
  <p>Paragraph content</p>
</div>
```

In the above example, you may have expected that the paragraph would be located 60px from the heading, but the margins collapse together to form one margin and only 40px is applied

> Note: If we add padding or border, then the collapsing rule will not apply. 

```CSS
h1 {
  margin-bottom: 40px;
}
div {
  margin-top: 40px;
  border-top: 1px solid #000;
}
p {
  margin-top: 20px;
}
```

```HTML
<h1>Sample</h1>
<div>
  <p>Paragraph content</p>
</div>
```

Now the paragraph is rendered 20px from the border of the div, margin of the paragraph is applied as it encountered a border in between

Collapsing margins are not applicable in following scenarios:

* floated elements (**`display: float`**)
* absolutely positioned elements  (**`position: absolute`**)
* inline-block elements (**`display: inline-block`**)
* elements with overflow set to anything other than visible (They do not collapse margins with their children.) (**`overflow: scroll`**)
* cleared elements (They do not collapse their top  margins with their parent block’s bottom margin.)
* the root element (**`HTML`**)


> Note: Please refer to examples in `collapse-margin.html & collapse-margin.css`

> Codepen link for the collapse margin can be accessed [here](https://codepen.io/markandan/pen/JjYxNgb)


### References
* [Mozilla MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
* [W3C](https://www.w3.org/Style/css2-updates/css2/box.html#collapsing-margins)
在前端开发中，列表样式主要涉及到两种基本的HTML元素：无序列表 (`<ul>`) 和有序列表 (`<ol>`)。这两种元素都可以包含一系列的列表项 (`<li>`)。

首先，让我们看看基本的HTML列表结构：

```html
<ul>
  <li>列表项一</li>
  <li>列表项二</li>
  <li>列表项三</li>
</ul>
```

或者：

```html
<ol>
  <li>列表项一</li>
  <li>列表项二</li>
  <li>列表项三</li>
</ol>
```

默认情况下，无序列表会显示为带有实心圆点的列表，而有序列表会按照1、2、3等顺序显示。但我们可以使用CSS来自定义这些列表的显示样式。

## list-style-type

CSS提供了一个属性叫做 `list-style-type`，可以用来更改列表项的标记样式。例如，我们可以这样做：

```css
ul {
  list-style-type: square;
}

```

上述代码将无序列表的标记样式更改为了方形。其他可用的值包括 `disc`、`circle`、`none` 等。

对于有序列表，我们也可以使用 `list-style-type` 属性来更改标记样式。例如，我们可以这样做：

```css
ol {
  list-style-type: upper-roman;
}

```

上述代码将有序列表的标记样式更改为了罗马数字。其他可用的值包括 `lower-roman`、`lower-alpha`、`upper-alpha`、`none` 等。

## list-style-image

`list-style-image` 属性本身并未提供设置图片大小的选项。这意味着，如果你直接使用这个属性，那么图像会以其原始大小显示为列表项的标记。

然而，如果你需要调整列表项标记图像的大小，你可以使用一些替代的方法。一种常见的方法是使用CSS的伪元素 (`::before` 或者 `::after`) 来创建并样式化你的自定义图像标记。这样，你就可以使用 `width` 和 `height` 属性来控制图像的大小。

例如，你可以这样做：

```css
ul {
  list-style-type: none;
}

ul li::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background-image: url('my-image.png');
  background-size: cover;
}

```

上述代码会为每个列表项添加一个自定义的图像标记。`width` 和 `height` 属性被用来设置图像的大小，`margin-right` 属性被用来设置标记和文字之间的间距。`background-image` 属性被用来设置图像，`background-size: cover;` 用来确保图像填满整个元素。

## list-style-position

此外，我们还可以使用 `list-style-position` 属性来更改列表项标记的位置。这个属性有两个值：`inside` 和 `outside`。默认值是 `outside`。

```css
ul {
  list-style-position: inside;
}

```

最后，我们可以使用 `list-style-image` 属性来使用图像作为列表项的标记。例如：

```css
ul {
  list-style-image: url('my-image.png');
}
```

## list-style

**`list-style`** CSS 属性是一个简写对属性集合，包括list-style-type, list-style-image和list-style-position

```css
list-style =
  <'list-style-position'>||
  <'list-style-image'>||
  <'list-style-type'>
```

## 列表样式总结

| 属性名称 | 用途 | 可选值示例 |
| --- | --- | --- |
| list-style-type | 定义列表项的标记的类型 | disc、circle、square、decimal、lower-roman、upper-roman、none |
| list-style-image | 使用图像作为列表项的标记 | URL地址 |
| list-style-position | 定义列表项标记的位置 | inside、outside |
| list-style | 复合属性 | <'list-style-position'>  ||
  <'list-style-image'>     ||
  <'list-style-type'> |

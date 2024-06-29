text-shadow属性用于在CSS3中为页面上的文本添加阴影效果，它基本语法如下所示：

```css
text-shadow: <h-shadow> <v-shadow> <blur-radius> <color>;
```

- **`<h-shadow>`**：表示阴影的水平偏移值，可以为正数（向右偏移）或负数（向左偏移）。
- **`<v-shadow>`**：表示阴影的垂直偏移值，可以为正数（向下偏移）或负数（向上偏移）。
- **`<blur-radius>`**：表示阴影的模糊半径，用来调整阴影的模糊程度，可以为0（表示阴影没有模糊效果，边缘清晰）或正数。
- **`<color>`**：表示阴影的颜色，可以使用具体的颜色值（如"#000000"）或使用预定义的颜色名称（如"red"）。

下面是一些实际示例，帮助大家理解text-shadow属性的应用：

# 简单的阴影效果

```html
<style type="text/css">
p {
  text-align: center;
  font: bold 60px helvetica, arial, sans-serif;
  color: #333;
  text-shadow: 4px 4px 4px #999;
}
</style>

<p>示例文本</p>
```

在这个示例中，text-shadow属性的值为**`0.1em 0.1em #333`**，表示在文本的右下角创建一个阴影效果。

设置阴影在文本的右上角或左下角

```html
<p style="text-shadow: -0.1em -0.1em #333;">示例文本</p> <!-- 右上角阴影 -->
<p style="text-shadow: -0.1em 0.1em #333;">示例文本</p> <!-- 左下角阴影 -->
```

增加模糊效果的阴影

```html
<p style="text-shadow: 0.1em 0.1em 0.3em #333;">示例文本</p>
```

这个示例中的text-shadow属性值为**`0.1em 0.1em 0.3em #333`**，表示在文本的右下角创建一个带有模糊效果的阴影。

需要注意的是，text-shadow属性的第一个值表示水平位移，第二个值表示垂直位移，正值表示向右或向下偏移，负值表示向左或向上偏移。在阴影偏移之后，可以选择指定一个模糊半径值，用来控制阴影的模糊程度。

# 定义多色阴影：

```html
<style type="text/css">
p {
  text-shadow: 2px 2px 4px red, -2px -2px 4px blue;
  color: white;
  background-color: black;
  padding: 10px;
}
</style>

<p>示例文本</p>
```

这个示例中，text-shadow属性定义了一个红色的阴影效果和一个蓝色的阴影效果，使文本具有多色阴影效果。

# 火焰文字：

```html
htmlCopy code
<style type="text/css">
h1 {
  text-shadow: 0 0 10px orange, 0 0 20px orange, 0 0 30px orange, 0 0 40px orange, 0 0 50px orange;
  color: black;
  font-size: 60px;
}
</style>

<h1>火焰文字</h1>
```

这个示例中，text-shadow属性定义了多个橙色的阴影效果，使文字呈现出火焰效果。

# 外发光文字：

```html
<style type="text/css">
h1 {
  color: black;
  width: 400px;
  font-size: 40px;
  background-color: black;
  text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white, 0 0 50px white;
}
<h4>外发光文字</h4>
```

这个示例中，text-shadow属性定义了多个白色的阴影效果，使文字具有外发光的效果。
通过这些示例，您可以根据需要使用text-shadow属性来设计各种阴影特效，以增强文本的可视效果。注意调整阴影的偏移、模糊半径和颜色值，以实现不同的效果。

# 立体文字：

```html
<style type="text/css">
h1 {
  text-shadow: 2px 2px 4px gray;
  color: white;
  font-size: 60px;
}
</style>

<h2>立体文字</h2>
```

这个示例中，text-shadow属性创建了一个灰色的阴影效果，使文字看起来有立体感。

# 描边文字：

```html
<style type="text/css">
h1 {
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  color: white;
  font-size: 60px;
}
</style>

<h3>描边文字</h3>
```

这个示例中，text-shadow属性定义了多个黑色的阴影效果，形成了一个描边效果。

#

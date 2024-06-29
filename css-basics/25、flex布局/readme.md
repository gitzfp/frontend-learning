# 背景

## flex布局体验:

我们先来看看下面这个最简单的布局：

![Screenshot 2023-08-20 at 23.28.26.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c6a8fc02-8526-40e5-9200-d1182a2917d4/Screenshot_2023-08-20_at_23.28.26.png)

假如html有两个div容器，请大家思考下如何实现上面的布局

## flex布局概念：

Flexbox布局，也称为Flex布局或弹性盒子布局，旨在提供更有效的元素排列和对齐方式。采用Flex布局的元素称为Flex容器，其子元素是容器成员，称为Flex项目。

## Flex布局特点：

- **flex 布局的子元素不会脱离文档流**，很好地遵从了“流的特性”。

<aside>
💡 我们之前学的 float 来做布局，float属性的元素会脱离文档流，而且会涉及到各种 BFC、清除浮动的问题，比较麻烦。

</aside>

- 子元素的float、clear和vertical-align属性在Flex布局下失效。
- flex 唯一的缺点就在于，它不支持低版本的 IE 浏览器。(flex 布局不支持 IE9 及以下的版本、IE10及以上部分支持、Opera部分支持)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3d8fbb23-8db5-4552-8019-0fc4d53c3196/Untitled.png)

综上所述，Flexbox布局是一种能够简便实现各种页面布局的布局方式，通过设定容器属性和项目属性来调整元素的排列和对齐方式，适用于动态变化的布局需求。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c2dd6d66-34ee-4392-8cf9-0b60a422c0ac/Untitled.png)

容器默认存在两个轴：**水平轴**（main axis）和**垂直轴**（cross axis），项目默认沿主轴排列（水平轴）：

# 父元素属性

想要使用flex布局，首先需要给父元素指定为flex布局，这样容器内的元素才能实现flex布局：

| 属性 | 描述 | 可选值 | 示例 |
| --- | --- | --- | --- |
| flex-direction | 主轴的方向。 | row | row-reverse | column | column-reverse | flex-direction: row; |
| flex-wrap | 控制子元素是否换行。 | nowrap | wrap | wrap-reverse | flex-wrap: wrap; |
| flex-flow | flex-direction 和 flex-wrap 的缩写。 | flex-direction + flex-wrap 的组合值 | flex-flow: row wrap; |
| justify-content | 子元素在主轴上的对齐方式。 | flex-start | flex-end | center | space-between | space-around | space-evenly | justify-content: center; |
| align-items | 子元素在交叉轴上的对齐方式。 | flex-start | flex-end | center  | stretch | align-items: flex-start; |
| align-content | 多行子元素在交叉轴上的对齐方式。 | flex-start | flex-end | center | space-between | space-around | stretch | align-content: space-between; |

## **flex-direction**:

这个属性决定了主轴的方向，从而影响子元素的排列方向。

示例代码：

```css
.container {
    display: flex;
    flex-direction: row; /* 默认值，水平排列 */
}
```

或

```css
.container {
    display: flex;
    flex-direction: column; /* 垂直排列 */
}
```

## **flex-wrap**:

这个属性控制子元素是否换行排列。

示例代码：

```css
.container {
    display: flex;
    flex-wrap: nowrap; /* 默认值，不换行 */
}
```

或

```css
.container {
    display: flex;
    flex-wrap: wrap; /* 换行 */
}
```

## **flex-flow**:

这个属性是**`flex-direction`**和**`flex-wrap`**的缩写，可以同时设置它们。

示例代码：

```css
.container {
    display: flex;
    flex-flow: row wrap; /* 水平排列且换行 */
}
```

## **justify-content**:

这个属性控制子元素在主轴上的对齐方式。

示例代码：

```css
.container {
    display: flex;
    justify-content: flex-start; /* 默认值，起始对齐 */
}
```

或

```css
.container {
    display: flex;
    justify-content: center; /* 居中对齐 */
}
```

<aside>
💡

**`space-around`** 和 **`space-evenly`** 是两种在CSS中用于布局的属性，用于定义flex容器中子元素之间的间距分配方式。它们主要用于Flexbox布局中，用于调整子元素的排列和空间分配。以下是它们的区别：

1. **space-around**:
**`space-around`** 会在每个子元素周围分配相等的空间，包括容器的开始和结束边缘。这意味着子元素之间的空间相等，而子元素与容器边缘之间的空间也相等。这会导致每个子元素周围有相同的空白间隙，但容器的开始和结束边缘可能与子元素之间的空间不同。
2. **space-evenly**:
**`space-evenly`** 会在每个子元素之间和子元素与容器边缘之间均匀分配空间。这意味着每个子元素之间的空间和子元素与容器边缘之间的空间都是相等的，从而在视觉上创建了更均匀的分布。

总之，两者的区别在于空间分配的方式。**`space-around`** 在子元素周围均匀分配空间，可能会导致开始和结束边缘的空间不同，而**`space-evenly`** 则在子元素之间和边缘之间均匀分配空间，创造更均匀的空间分布。

</aside>

## **align-items**:

这个属性控制单行子元素在交叉轴上的对齐方式。

示例代码：

```css
.container {
    display: flex;
    align-items: flex-start; /* 默认值，顶部对齐 */
}
```

或

```css
.container {
    display: flex;
    align-items: center; /* 居中对齐 */
}
```

## **align-content**:

这个属性控制多行子元素在交叉轴上的对齐方式。

示例代码：

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start; /* 默认值，顶部对齐 */
}
```

或

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between; /* 两行之间均匀分布 */
}
```

# 子元素属性

子元素是指父容器里面的子项目们（父容器被声明为 flex 盒子的情况下）。

| 属性 | 描述 | 示例 |
| --- | --- | --- |
| order | 定义子元素的排列顺序。 | order: 2; |
| flex-grow | 定义子元素在剩余空间分配时的放大比例。 | flex-grow: 1; |
| flex-shrink | 定义子元素在空间不足时的缩小比例。 | flex-shrink: 0; |
| flex-basis | 定义子元素在没有设置宽度时的基准尺寸。 | flex-basis: 200px; |
| flex | 缩写属性，包括 flex-grow, flex-shrink, flex-basis。 | flex: 1 0 200px; |
| align-self | 定义单个子元素在交叉轴上的对齐方式，覆盖父元素设置。 | align-self: center; |

## **order**:

这个属性决定了子元素的排列顺序。

示例代码：

```css
.item {
    order: -1; /* 整数，可为负值 */
}
```

## **flex-grow**:

这个属性定义了子元素在剩余空间分配时的放大比例，默认为0，即如果存在剩余空间时也不放大。当容器中仍有剩余的空间，设置的 **`flex-grow`** 属性才能生效。

示例代码：

```css
.item {
    flex-grow: 1; /* 在剩余空间中等比例增长 */
}
```

## **flex-shrink**:

这个属性定义了子元素在空间不足时的缩小比例。默认为1，即如果空间不足，该项目将缩小。不能设置负值，使用形式如下：

示例代码：

```css
.item {
    flex-shrink: 0; /* 不缩小，保持原尺寸 */
}
```

## **flex-basis**:

**`flex-basis`** 是一个用于 CSS 弹性盒子布局（Flexbox）中的属性，它定义了在分配多余空间或收缩空间时，一个弹性盒子项（flex item）的初始尺寸。它在以下几种情况中起作用：

1. **当没有多余空间时（主轴空间不足）：** 如果容器的主轴空间不足以容纳所有弹性盒子项的基础尺寸（即 **`flex-basis`**），那么浏览器会根据 **`flex-grow`** 和 **`flex-shrink`** 属性来决定哪些项目会收缩以适应容器。如果没有指定 **`flex-basis`**，默认情况下会使用项目的内容尺寸。
2. **当有多余空间时（主轴空间充足）：** 如果容器的主轴空间超过了所有弹性盒子项的基础尺寸之和，剩余的空间会根据各个项目的 **`flex-grow`** 属性进行分配。这时 **`flex-basis`** 不会影响分配多余空间的过程。

综上所述，**`flex-basis`** 可以用来设置弹性盒子项的初始尺寸。它的取值可以是一个长度值（如像素、百分比等），也可以是关键字 **`auto`**（默认值，表示使用项目的内容尺寸作为基础尺寸）。通常情况下，通过设置 **`flex-basis`** 可以在弹性盒子布局中控制项目的初始尺寸，以便在容器尺寸变化时实现不同的布局效果。

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间，浏览器会根据这个属性来计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。使用形式如下：

```css
.item {
    flex-basis: <length> | auto;
}
```

当主轴设置为水平时，且设置了 flex-basis，设置的项目宽度值会失效，`flex-basis` 需要跟 `flex-grow` 和 `flex-shrink` 配合使用才能生效。有两种特殊的值：

- 当 `flex-basis` 值为 0 % 时，项目尺寸会被认为是0，因此无论项目尺寸设置多少都用；
- 当 `flex-basis` 值为 auto 时，则跟根据尺寸的设定值来设置大小。

示例代码：

```css
.item {
    flex-basis: 200px; /* 默认尺寸为 200px */
}
```

## **flex**:

这个缩写属性包括了 **`flex-grow`**, **`flex-shrink`** 和 **`flex-basis`**。后两个属性可选。默认值为：**`flex:0 1 auto。`**使用形式如下：

示例代码：

```css
.item {
    flex: 1 0 200px; /* 等比例增长，不缩小，基准尺寸为 200px */
}
```

## **align-self**:

这个属性允许单个子元素覆盖父元素的 **`align-items`** 属性，定义在交叉轴上的对齐方式。

示例代码：

```css
.item {
    align-self: center; /* 在交叉轴上居中对齐 */
}
```

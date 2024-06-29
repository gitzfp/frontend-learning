# 单行文本溢出

当处理单行文本溢出时，有几个相关的 CSS 属性可以使用。以下是这些属性及其描述、可取值和适用场景的表格展示：

| 属性 | 描述 | 可取值 | 适用场景 |
| --- | --- | --- | --- |
| overflow | 控制容器中溢出内容的展示方式。 | visible, hidden, scroll, auto | 适用于任何容器，可决定是否显示滚动条或隐藏溢出内容。 |
| text-overflow | 控制文本溢出时的展示方式。 | clip, ellipsis | 适用于单行文本溢出，可裁剪溢出的文本或在溢出位置显示省略号。 |
| white-space | 控制文本换行和空白字符的处理方式。 | normal, nowrap, pre, pre-wrap, pre-line | 适用于多行文本溢出，可决定是否换行、保留空白字符以及如何显示文本。 |

常见的组合包括使用 **`overflow: hidden;`** 隐藏溢出内容，**`text-overflow: ellipsis;`** 在溢出位置显示省略号，并结合 **`white-space`** 属性控制文本的换行和空白字符处理方式。

HTML代码如下所示：

```html

<p class="single">这是一个超过容器宽度的文本内容</p>
```

CSS代码如下所示：

```css
.single {
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
    overflow: hidden;
}
```

在这个例子中，容器的宽度被限制为200像素，并且超过容器宽度的文本将被截断。**`overflow: hidden`** 属性用于隐藏溢出的文本，**`white-space: nowrap`** 属性用于禁止文本换行，而 **`text-overflow: ellipsis`** 属性则会在文本溢出时显示省略号。

# 多行文本溢出

主要使用 **`display: -webkit-box;`**、**`-webkit-line-clamp`** 和 **`-webkit-box-orient`** 属性来实现。这个解决方案主要适用于基于 WebKit 引擎的浏览器（如 Chrome 和 Safari）。

下面是一个展示多行文本溢出的示例：

HTML 代码：

```html
<div class="nutil">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc tristique consectetur velit ut vestibulum.
  Quisque quis mattis odio, ac gravida leo.
  Donec placerat sem vitae ligula maximus iaculis.
</div>
```

CSS 代码：

```css
.mutil {
    width: 200px;
    display: -webkit-box;
    -webkit-line-clamp: 3;/* 指定最大行数 */
    -webkit-box-orient: vertical;/* 设置垂直排列 */
    overflow: hidden;
}
```

在这个例子中，容器的高度被限制为 100 像素，通过将 **`.text`** 元素的 **`display`** 属性设置为 **`-webkit-box;`**，并使用 **`-webkit-line-clamp`** 属性指定最大行数为 3，我们可以实现多行文本的溢出效果。超过三行的文本将被隐藏，并且在最后一行显示省略号。

这节课我们学习HTML的语法规则，首先我们打开上节课写的HTML文档，逐行来分析

# 1.<!DOCTYPE>

声明必须是HTML文档的第一行，以告诉浏览器使用哪个HTML版本进行渲染。<!DOCTYPE html> 是一个简化的文档类型声明，它指示浏览器使用HTML5解析文档。

1. 正确的例子如下：

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        <h1>Welcome to my page</h1>
        <p>This is some text.</p>
    </body>
</html>
```

错误的例子如下：

```html
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        <h1>Welcome to my page</h1>
        <p>This is some text.</p>
    </body>
</html>
<!DOCTYPE html>

```

# 2.HTML文档必须有<html>标签作为根元素

其它所有标签都必须嵌套在<html>标签内。正确的例子如下：

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        <h1>Welcome to my page</h1>
        <p>This is some text.</p>
    </body>
</html>

```

错误的例子如下：

```html
<!DOCTYPE html>
<body>
    <h1>Welcome to my page</h1>
    <p>This is some text.</p>
</body>
<html>
    <head>
        <title>My Page</title>
    </head>
</html>

```

# 3. 标签由尖括号（< >）包围

通常有开始标签和结束标签。开始标签包含标签名称和任何属性，结束标签在名称前加上斜杠（/）。

正确的例子如下：

```html
<h1>Welcome to my page</h1>
<p>This is some text.</p>
<img src="image.jpg" alt="An image">
```

错误的例子如下：

```html
<h1>Welcome to my page</p>
<p>This is some text.</h1>
<img src="image.jpg" alt="An image">
```

# 4. 标签名称不区分大小写，但建议使用小写字母

   正确的例子如下：

```html
<h1>Welcome to my page</h1>
<p>This is some text.</p>
```

错误的例子如下：

```html
<H1>Welcome to my page</H1>
<P>This is some text.</P>
```

以上是HTML语法规则的一些正确和错误的例子。请注意，在编写HTML文档时，必须遵循这些规则以确保文档能够被正确地解析和渲染。

# 5.**双标签**

双标签是HTML中最常见的标签形式，由开始标签和结束标签组成，例如：
<div>这是一个div标签。</div>

```html
<div>这是一个div标签。</div>
```

在这个例子中，**`<div>`**是开始标签，**`</div>`**是结束标签，中间的文本“这是一个div标签。”是**`<div>`**标签的内容。

双标签还可以嵌套使用，例如：<div>

```html
<div>
  <h1>这是一个标题</h1>
  <p>这是一个段落。</p>
</div>
```

在这个例子中，**`<div>`**标签包含了一个**`<h1>`**标签和一个**`<p>`**标签。

# 6.单标签

单标签是不需要结束标签的标签形式，例如：

```html
<img src="image.jpg" alt="这是一张图片">
```

在这个例子中，**`<img>`**标签是一个单标签，它用于在页面中显示图像。**`<img>`**标签包含了**`src`**和**`alt`**属性，但不需要结束标签。

还有一些其他的单标签，例如：

- **`<br>`**：换行标签。
- **`<input>`**：用于表单中的输入字段。
- **`<meta>`**：用于指定网页的元数据。

# 7.标签的包含关系

HTML中的标签可以相互包含，这种包含关系可以嵌套多层次，例如：

```html

<div>
  <h1>这是一个标题</h1>
  <p>这是一个段落。</p>
  <ul>
    <li>列表项1</li>
    <li>列表项2</li>
  </ul>
</div>
```

在这个例子中，**`<div>`**标签包含了一个**`<h1>`**标签、一个**`<p>`**标签和一个**`<ul>`**标签，**`<ul>`**标签包含了两个**`<li>`**标签。

需要注意的是，在嵌套标签时必须正确地关闭标签，否则会导致标签嵌套错误，影响页面的正确显示。

以上是HTML标签的使用方法，掌握好这些知识是开发Web页面和应用程序的基础。希望这个简要的介绍对您有所帮助！

# 补充规则：

1. **HTML属性的语法**

HTML属性提供了有关标签的附加信息，它们写在标签的开始标记中，并用空格分隔。属性由属性名和属性值组成，中间用等号（**`=`**）连接，属性值用双引号（**`"`**）或单引号（**`'`**）包围。例如，**`<img src="image.png" alt="图片">`**中的**`src`**和**`alt`**是属性名，**`"image.png"`**和**`"图片"`**是属性值。

1. **HTML注释的语法**

HTML注释用于在文档中添加注释，它们写在**`<!--`**和**`-->`**之间。例如，**`<!-- 这是一个注释 -->`**。

1. **HTML文本的语法**

HTML文本可以直接写在标签中，也可以用特殊字符实体表示。例如，**`<p>这是一段文本。</p>`**中的**`这是一段文本。`**就是文本内容。特殊字符实体是一些预定义的字符，例如**`&lt;`**表示小于号（**`<`**），**`&gt;`**表示大于号（**`>`**），**`&nbsp;`**表示空格。如果要在文本中直接使用这些特殊字符，需要将它们写成实体的形式。

# 总结

总的来说，HTML的语法规则非常简单和灵活，容易理解和学习。熟悉HTML的语法规则可以帮助我们更好地编写结构良好、语义明确的网页，从而提高网站的可访问性和SEO优化效果。

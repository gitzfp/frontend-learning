大家好，今天我们开始学习 JavaScript。首先，我们来了解一下什么是 JavaScript。

## 什么是 JavaScript

JavaScript 是一种轻量级、解释型的编程语言，主要用于在网页上实现动态效果和交互功能。它可以在浏览器中运行，与 HTML 和 CSS 共同构成前端开发的三大核心技术。JavaScript 不仅可以操作网页内容，还能进行数据处理、与服务器通信等。

JavaScript 的引入有三种主要方式：

1. **行内式**：将 JS 代码直接写在 HTML 标签的事件属性中。
2. **内嵌式**：将 JS 代码写在 HTML 页面的`<script>`标签中。
3. **外链式**：将 JS 代码写在独立的 JS 文件中，然后在 HTML 中引用。

我们依次来看每一种方式的具体实现。

### 方式 1：行内式

行内式的 JS 代码直接写在 HTML 标签的事件属性中，如下：

```html
<input type="button" value="点我点我" onclick="alert('我是JS Hello 方式1')" />
```

完整的 HTML 代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input
      type="button"
      value="点我点我"
      onclick="alert('我是JS Hello 方式1')"
    />
  </body>
</html>
```

这种方式虽然可以快速实现效果，但可读性差，不适合编写大量的 JS 代码。

### 方式 2：内嵌式

内嵌式的 JS 代码写在`<script>`标签中，如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <script type="text/javascript">
      alert("我是JS hello 方式2");
      console.log("我是JS hello 方式2");
    </script>
  </body>
</html>
```

这种方式适合在学习或简单的网页中使用。

<aside>
💡

1. **加载顺序**：

• JavaScript 代码写在 <head> 中会在页面内容加载之前加载和执行。这意味着在 JavaScript 执行完成之前，页面的其余内容（如文档结构、样式等）可能还未完全加载和展示。

2. **影响页面渲染**：

• 如果 JavaScript 代码包含大量的操作或需要执行耗时的任务，可能会阻塞页面的渲染。这会导致用户看到空白页面或长时间的加载状态，用户体验较差。

3. **全局作用**：

• 在 <head> 中定义的 JavaScript 代码通常可以全局使用，因为它们在页面其他部分加载之前已经执行。

**写在 <body> 的底部：**

1. **推荐做法**：

• 为了避免上述问题，通常建议将 JavaScript 代码放置在 <body> 结尾处（即 </body> 标签之前）。这样做可以确保页面的主要内容和结构先加载和展示给用户，再加载和执行 JavaScript，从而提升页面的加载性能和用户体验。

2. **延迟加载**：

• **将 JavaScript 放在 <body> 底部可以延迟加载脚本，允许页面的其余内容更快地展示给用户。这种方式对于提高页面加载速度和优化性能非常有效。**

3. **局部作用**：

• 在 <body> 底部的 JavaScript 代码可能对页面的局部功能实现更为合适，因为它们可以访问页面中的元素和内容，并在页面结构加载完成后立即执行。

**总结：**

• **在 <head> 中**：适合少量、轻量级的 JavaScript 代码或需要在页面加载前执行的初始化操作。

• **在 <body> 底部**：推荐的做法，可以提高页面加载性能，避免阻塞页面渲染，提升用户体验。

</aside>

### 方式 3：外链式

外链式将 JS 代码写在独立的文件中，然后在 HTML 中引用，如下：

HTML 代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <script src="utils.js"></script>
  </body>
</html>
```

utils.js 文件：

```jsx
alert("我是JS hello 方式3");
console.log("我是JS hello 方式3");
```

这种方式有利于代码的结构化和复用，是实战开发中常用的方式。

### JavaScript 语法规则

1. JS 对换行、缩进、空格不敏感
2. 建议每一条语句末尾加上**分号**

<aside>
💡 不写分号，浏览器会在换行符的位置自动添加分号，但是会消耗一些系统资源和性能，甚至有可能**添加错误**，导致一些奇怪的bug

</aside>

1. 所有符号都是英文的
2. JS 严格区分大小写。

### JavaScript 注释

- **单行注释**：`// 这是单行注释`
- **多行注释**：`/* 这是多行注释 */`

### JavaScript 输出语句

1. **弹窗：alert()**

   ```html
   <script>
     alert("我是JS");
   </script>
   ```

   弹出一个警告框，显示信息并等待用户点击“OK”。

2. **弹窗：confirm()**

   ```jsx
   var result = confirm("你听说过我是JS吗？");
   console.log(result);
   ```

   弹出一个确认框，有“确认”和“取消”按钮，返回布尔值。

3. **弹出输入框：prompt()**

   ```jsx
   var a = prompt("请随便输入点什么东西吧");
   console.log(a);
   ```

   弹出一个输入框，接收用户输入并返回。

4. **控制台输出：console.log()**

   ```jsx
   console.log("我是JS");
   ```

   控制台用于调试程序。

---

以上就是 JavaScript 第一课的内容，希望大家能够理解和掌握这些基本概念和用法。有什么问题随时提问。

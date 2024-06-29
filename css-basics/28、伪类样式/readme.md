伪类（Pseudo-classes）是CSS中一种特殊的选择器，用于定义元素的特定状态或条件下的样式。伪类基于它们是如何与用户的交互，可以分为：静态伪类和动态伪类。

### **静态伪类选择器**

静态伪类选择器用于选择元素在文档结构中的特定位置或状态，它们不依赖于用户的交互。

### 常用静态伪类：

1. **`:first-child` / `:last-child`** - 选择父元素的第一个或最后一个子元素。
2. **`:nth-child(n)`** - 选择父元素的第n个子元素。
3. **`:first-of-type` / `:last-of-type`** - 选择指定类型的第一个或最后一个同级元素。

### **动态伪类选择器**

动态伪类选择器依赖于用户的交互，用于定义元素在被用户操作时的样式。

### 常用动态伪类：

1. **`:hover`** - 当用户鼠标悬停在元素上时应用。
2. **`:active`** - 当元素被点击或激活时应用。
3. **`:focus`** - 当元素获得焦点时应用。
4. **`:visited` / `:link`** - 特定于超链接，用于定义已访问和未访问链接的样式。

### **实际应用示例**

为了更好地理解，下面是一些HTML和CSS的结合示例，展示如何使用这些伪类。

```html
ul li:first-child {
    color: blue; /* 第一个列表项蓝色 */
}

ul li:last-child {
    color: green; /* 最后一个列表项绿色 */
}

ul li:nth-child(2) {
    color: red; /* 第二个列表项红色 */
}
.fancy-button {
    background-color: #4CAF50; /* 基础颜色 */
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition: background-color 0.3s; /* 过渡效果 */
}

.fancy-button:hover {
    background-color: #45a049; /* 鼠标悬停时变色 */
}

.fancy-button:focus {
    border-color: green; /* 按钮获得焦点时的样式 */
}

.fancy-button:active {
    background-color: darkblue; /* 按钮被点击不松开时的样式 */
}

.image-container img {
    width: 100%;
    transition: transform 0.3s ease-in-out; /* 过渡效果 */
}

.image-container img:hover {
    transform: scale(1.1); /* 鼠标悬停时放大 */
}

.input-field {
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 4px;
    transition: border-color 0.3s; /* 过渡效果 */
}

.input-field:focus {
    border-color: #4CAF50; /* 获得焦点时变色 */
}

<ul>
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
</ul>
<div class="image-container">
    <img src="path/to/image1.jpg" alt="Image 1">
    <img src="path/to/image2.jpg" alt="Image 2">
    <!-- 更多图片 -->
</div>
<button class="fancy-button">悬停我</button>
<input type="text" class="input-field" placeholder="在此输入...">
```

## 超链接样式

**`:visited` 和 `:link`**

- 特定于超链接，用于定义已访问和未访问链接的样式。

```html

a:link {
    color: green; /* 未访问的链接 */
}

a:visited {
    color: purple; /* 已访问的链接 */
}
<a href="https://baidu.com">访问我</a>
```

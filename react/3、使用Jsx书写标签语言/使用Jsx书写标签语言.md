### 为什么 React 将标签和渲染逻辑耦合在一起

在传统的 Web 开发中，我们通常将 HTML、CSS 和 JavaScript 分别存放在不同的文件中。HTML 负责页面结构，CSS 负责样式，JavaScript 负责逻辑。但随着 Web 的交互性越来越强，JavaScript 对页面内容的控制变得越来越重要，逻辑和标签逐渐变得难以分离。

React 通过将标签和渲染逻辑耦合在一起，让开发者能够在一个地方管理页面的所有相关部分。这样做有以下几个好处：

1. **一致性和同步性**：将一个按钮的渲染逻辑和标签放在一起，可以确保它们在每次编辑时都能保持一致。
2. **模块化和复用性**：每个 React 组件都是独立的模块，可以很容易地复用和维护。
3. **简洁性**：代码更简洁，易于理解和管理。

[理解“一致性和同步性”](https://www.notion.so/de5d012f5abe4018bb5e1cc88125c18b?pvs=21)

### JSX 与 HTML 的区别

JSX 是 JavaScript 的语法扩展，看起来和 HTML 很像，但它有更多的规则和更严格的语法。以下是一些关键区别：

1. **根元素**：JSX 必须有一个根元素。如果有多个元素，需要用一个父标签包裹起来。
2. **标签闭合**：所有标签必须正确闭合。自闭合标签如 `<img>` 必须写成 `<img />`。
3. **属性命名**：JSX 中的属性使用驼峰式命名法，例如 `className` 代替 `class`，`strokeWidth` 代替 `stroke-width`
4. **引号和大括号**：用引号传递字符串，用大括号传递 JavaScript 表达式。

### 如何通过 JSX 展示信息

在 React 中，组件是用 JSX 来描述的。以下是一个简单的例子，展示了如何通过 JSX 渲染一个待办事项列表：

```jsx
export default function TodoList() {
  return (
    <>
      <h1>海蒂·拉玛的待办事项</h1>
      <img
        src="https://th.bing.com/th?q=Farmer+Bob+%e7%8e%9b%e8%8e%8e%e6%8b%89%e8%92%82&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=2&pid=InlineBlock&mkt=zh-CN&cc=CN&setlang=en&adlt=strict&t=1&mw=247"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>发明一种新式交通信号灯</li>
        <li>排练一个电影场景</li>
        <li>改进频谱技术</li>
      </ul>
    </>
  );
}
```

### 如何使用引号传递字符串

在 JSX 中，用引号传递字符串与 HTML 类似。例如：

```jsx
<img
  src="<https://i.imgur.com/yXOvdOSs.jpg>"
  alt="Hedy Lamarr"
  className="photo"
/>
```

### 在 JSX 的大括号内引用 JavaScript 变量

你可以在 JSX 中使用大括号来引用 JavaScript 变量：

```jsx
export default function Greeting() {
  const userName = "海蒂·拉玛";
  return <h1>欢迎, {userName}!</h1>;
}
```

### 在 JSX 的大括号内调用 JavaScript 函数

同样，你可以在 JSX 中调用 JavaScript 函数：

```jsx
export default function Greeting({ user }) {
  function getGreeting(user) {
    return user ? <h1>欢迎, {user}!</h1> : <h1>欢迎, 游客!</h1>;
  }
  return getGreeting(user);
}
```

### 在 JSX 的大括号内使用 JavaScript 对象

你可以在 JSX 中使用 JavaScript 对象来设置样式或其他属性：

```jsx
export default function StyledComponent() {
  const style = {
    color: "blue",
    backgroundColor: "lightgray",
  };
  return <h1 style={style}>这是一段带样式的文本</h1>;
}
```

### 总结

现在你已经了解了为什么 React 将标签和渲染逻辑耦合在一起，JSX 与 HTML 的区别，以及如何通过 JSX 展示信息、使用引号传递字符串、在大括号内引用 JavaScript 变量、调用 JavaScript 函数和使用 JavaScript 对象。这些知识点将帮助你更好地理解和使用 React 进行开发。

### 练习https://transform.tools/html-to-jsx

将以下 HTML 转换为 JSX：

```html
<h1>欢迎来到我的站点！</h1>
<p class="summary">
  你可以在这里了解我的想法。
  <br><br>
  <b>还有科学家们的<i>照片</b></i>！
  <img
        src="<https://i.imgur.com/yXOvdOSs.jpg>"
        alt="Hedy Lamarr"
        className="photo"
      >
</p>
```

转换后：

```jsx
<>
  <h1>欢迎来到我的站点！</h1>
  <p className="summary">
    你可以在这里了解我的想法。
    <br />
    <br />
    <b>
      还有科学家们的<i>照片</i>
    </b>！
  </p>
</>
```

通过这种练习，你将逐步掌握 JSX 的使用，并能够灵活地在 React 组件中展示和处理信息。

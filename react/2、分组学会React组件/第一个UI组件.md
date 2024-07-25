组件是 React 的核心概念之一，是构建用户界面的基础。让我们从基础开始，一步步构建我们的第一个 React 组件。

### 一、什么是组件？

组件是可复用的 UI 元素。就像 HTML 标签一样，组件可以组合、排序和嵌套，最终构建出整个应用的界面。

### 二、编写第一个 React 组件

我们将从一个简单的组件开始，它只是显示一张图片。让我们来看看如何实现。

**步骤 1：定义函数组件**

使用 JavaScript 函数来定义组件。组件的名字必须以大写字母开头。

```jsx
// Profile.js
function Profile() {}
```

**步骤 2：实现函数组件**

组件返回一个带有 `src` 和 `alt` 属性的 `<img />` 标签。这种写法看起来像 HTML，但实际上是 JavaScript。这种语法被称为 JSX。

```jsx
return <img width={100} src={AlbertEinstein} alt="Albert Einstein" />;
```

如果返回语句和标签不在同一行，必须用括号包裹：

```jsx
return (
  <div>
    <img width={100} src={AlbertEinstein} alt="Albert Einstein" />
  </div>
);
```

**步骤 3：导出函数组件**

```jsx
// Profile.js
export default function Profile() {
  return (
    <div>
      <img width={100} src={AlbertEinstein} alt="Albert Einstein" />
    </div>
  );
}
```

在 React 中，每个组件通常会在一个单独的文件中定义，并通过 `export default` 语法导出，以便在其他文件中使用。

### 三、使用组件

现在我们已经定义了 `Profile` 组件，我们可以在其他组件中使用它。接下来，我们定义一个 `Gallery` 组件，内部使用多个 `Profile` 组件。

```jsx
// Gallery.js
import Profile from "./Profile";

export default function Gallery() {
  return (
    <section>
      <h1>了不起的科学家</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

### 四、浏览器所看到的

注意下面两者的区别：

- `<section>` 是小写的，所以 React 知道我们指的是 HTML 标签。
- `<Profile />` 以大写 P 开头，所以 React 知道我们想要使用名为 Profile 的组件。

浏览器最后看到的是：

```html
<section>
  <h1>了不起的科学家</h1>
  <img width="{100}" src="{AlbertEinstein}" alt="Albert Einstein" />
  <img width="{100}" src="{AlbertEinstein}" alt="Albert Einstein" />
  <img width="{100}" src="{AlbertEinstein}" alt="Albert Einstein" />
</section>
```

### 五、嵌套和组织组件

组件是常规的 JavaScript 函数，所以你可以将多个组件保存在同一个文件中。当组件相对较小或彼此紧密相关时，这是一种省事的处理方式。如果文件变得臃肿，你可以将组件移动到单独的文件中。

```jsx
// Gallery.js
import Profile from "./Profile";

export default function Gallery() {
  return (
    <section>
      <h1>了不起的科学家</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

组件可以渲染其他组件，但请不要嵌套他们的定义：

```jsx
export default function Gallery() {
  // 🔴 永远不要在组件中定义组件
  function Profile() {
    return <img width={100} src={AlbertEinstein} alt="Albert Einstein" />;
  }
  return (
    <section>
      <h1>了不起的科学家</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

<aside>
💡 这段代码非常慢，可能还会导致 bug。

1. **性能问题**：每次 Gallery 组件渲染时，都会重新创建 Profile 组件。这会增加不必要的开销，导致性能问题。
2. **Bug 和不可预测的行为**：嵌套定义的组件可能会导致 React 的渲染机制出现问题，产生难以调试的错误。
</aside>

因此，你应该在顶层定义每个组件：

```jsx
// Profile.js
export default function Profile() {
  return (
    <img
      src="./AlbertEinstein.jpg"
      alt="Albert Einstein"
    />
  );
}

// Gallery.js
import Profile from "./Profile";

export default function Gallery() {
  return (
    <section>
      <h1>了不起的科学家</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

```

当子组件需要使用父组件的数据时，你需要通过 `props` 的形式进行传递，而不是嵌套定义。

### 六、组件的导入和导出

在 React 中，组件的导入和导出是非常重要的概念。通过正确地导入和导出组件，你可以在不同的文件和组件之间复用代码。

### 1. 默认导出和导入

在一个文件中，你可以使用 `export default` 导出一个组件，然后在另一个文件中使用 `import` 导入这个组件。

**导出组件**（Profile.js）：

```jsx
export default function Profile() {
  return <img width={100} src={AlbertEinstein} alt="Albert Einstein" />;
}
```

**导入组件**（Gallery.js）：

```jsx
import Profile from "./Profile";

export default function Gallery() {
  return (
    <section>
      <h1>了不起的科学家</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

### 2. 命名导出和导入

除了默认导出，你还可以使用命名导出。这允许你从一个文件中导出多个组件或函数。

**导出组件**（Components.js）：

```jsx
export function Profile() {
  return <img width={100} src={AlbertEinstein} alt="Albert Einstein" />;
}

export function Gallery() {
  return (
    <section>
      <h1>了不起的科学家</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

**导入组件**（App.js）：

```jsx
import { Profile, Gallery } from "./Components";

function App() {
  return (
    <div>
      <Gallery />
    </div>
  );
}

export default App;
```

导出多个组件

```jsx
// Components.js
export function Profile() {
  return <img width={100} src={AlbertEinstein} alt="Albert Einstein" />;
}

export function Gallery() {
  return (
    <section>
      <h1>了不起的科学家</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

### 小结

今天，我们学习了如何创建和使用 React 组件，并了解了组件的导入和导出。关键点如下：

- 组件是可复用的 UI 元素。
- 每个组件是一个返回 JSX 标签的 JavaScript 函数。
- 组件的名称必须以大写字母开头。
- 组件可以组合、排序和嵌套，构建出复杂的用户界面。
- 通过正确地导入和导出组件，可以在不同文件和组件之间复用代码。

希望大家通过今天的课程，能对 React 组件有一个初步的认识和理解。接下来，我们会进一步探讨如何在组件之间传递数据以及如何管理组件的状态。感谢大家的参与！

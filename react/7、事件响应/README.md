## 一、什么是事件响应

React 允许在 JSX 中添加事件处理函数，用来响应一些用户交互事件。事件处理函数是一个自定义的函数，在事件发生时触发（例如点击、鼠标悬停等）。

在本课件中，我们将会学习到如下几个知识点：

- 如何添加事件处理函数
- 事件响应的不同方式
- 如何从父组件传递事件处理逻辑
- 事件如何传播与如何阻止它们

## 二、添加事件处理函数

下面这个简单的按钮并没有任何的事件响应：

```jsx
function Button() {
  return (
    <button>
      无任何事件响应
    </button>
  );
}
```

为了让这个按钮与用户交互，我们可以通过下面的步骤实现点击事件：

1. 在 Button 组件内部定义一个名为 `handleClick` 的函数。
2. 实现这个函数的逻辑：使用 `alert` 来显示消息。
3. 添加 `onClick={handleClick}` 到 `<button>` JSX 中。

```jsx
function Button() {
  function handleClick() {
    alert('你点击了我！');
  }

  return (
    <button onClick={handleClick}>
      点我
    </button>
  );
}
```

## 三、事件响应的不同方式

我们可以使用下面的方式实现事件响应，包括一些常见的场景：

### 1. 使用组件内定义的函数

例如：

```jsx
<button onClick={handleClick}>播放音乐</button>
```

### 2. 使用内联的函数

例如：

```jsx
<button onClick={function handleClick() {
  alert('音乐播放中！');
}}>
播放音乐
</button>
```

### 3. 使用简化的箭头函数

例如：

```jsx
<button onClick={() => {
  alert('音乐播放中！');
}}>
播放音乐
</button>
```

这些方式都是相同的，可以根据场景和个人喜好选择使用。

**常见场景：**

**点击事件：如按钮点击播放音乐或视频，可以使用组件内定义的函数来处理。**

例如：

```jsx
function PlayMusicButton() {
  function handlePlayMusic() {
    alert('正在播放音乐！');
  }

  return (
    <button onClick={handlePlayMusic}>
      播放音乐
    </button>
  );
}
```

鼠标悬停事件：如在图片上悬停时显示工具提示，可以使用箭头函数直接处理。

例如：

```jsx
function ImageWithTooltip() {
  return (
    <img
      src="example.jpg"
      alt="示例图片"
      onMouseEnter={() => alert('这是一个工具提示！')}
    />
  );
}
```

表单输入事件：如在文本框中输入时更新状态，可以使用内联函数或组件内函数，根据需要的复杂度选择，例如：

```jsx
  function TextInput() {
      return (
        <input
          type="text"
          onChange={(e) => console.log('文本变化：'+e.target.value)}
        />
      );
    }
```

## 四、事件如何从父组件传递

往子组件中传递事件处理逻辑，通常我们会在父组件中定义这个函数：

```jsx
 function App() {
	    function handleUploadClick() {
	       alert('子组件被点击')
	    }
      return <div onClick={() => {
		      console.log('从子组件传递过来');
	    }}>
        <h1>Hello, React without Webpack and Babel!</h1>
        <FirstButton />
        <SecondButton />
        <ThirdButton />
        <FouthButton />
        <TextInput />
        <Button onClick={handleUploadClick}/>
      </div>;
    }
    function Button({onClick}) {
      return (
        <button onClick={(e) => {
          console.log('come on')
        }}>
          点击子组件
        </button>
      );
    }
```

## 五、阻止事件传播

事件通常会向上传播，从子组件一直到父组件。我们可以使用 `e.stopPropagation()` 来阻止事件传播到父组件。

例如：

```jsx
 function App() {
	    function handleUploadClick() {
	       alert('子组件被点击')
	    }
      return <div onClick={() => {
		      alert('从子组件传递过来');
	    }}>
        <h1>Hello, React without Webpack and Babel!</h1>
        <FirstButton />
        <SecondButton />
        <ThirdButton />
        <FouthButton />
        <TextInput />
        <Button onClick={handleUploadClick}/>
      </div>;
    }
    function Button({onClick}) {
      return (
        <button onClick={(e) => {
          console.log('come on')
          e.stopPropagation()
        }}>
          点击子组件
        </button>
      );
    }
```

## 总结

- 必须传递事件处理函数，而非函数调用！例如：`onClick={handleClick}`，而不是 `onClick={handleClick()}`。

<aside>
💡

在 React 中，必须传递事件处理函数，而不是调用它，因为 `onClick={handleClick}` 是在事件触发时执行 `handleClick` 函数。而 `onClick={handleClick()}` 会在组件渲染时立即调用 `handleClick`，而不是等待用户交互。这是因为在 JSX 中使用 `{}` 包裹的代码会立即执行。因此，传递函数引用可以确保事件只在用户交互时触发，而不是在渲染阶段就执行。

</aside>

- 事件处理函数可以单独定义或内联定义。
- 可以在父组件中定义事件处理函数，并将其作为 prop 传递给子组件。
- 可以根据应用程序的特定名称定义事件处理函数的 prop，例如 `onPlayMovie`、`onUploadImage` 等。
- `e.stopPropagation()` 是**阻止事件继续传播**到父级或其他元素
- 相对的，要阻止默认的浏览器行为，可以使用 `e.preventDefault()`。

e.preventDefault() 的作用是**阻止浏览器执行事件的默认行为**。某些 HTML 元素有内置的默认行为，例如：

•	提交表单时，浏览器默认会刷新页面。

•	点击链接时，浏览器默认会跳转到链接的目标地址。

如果你想要阻止这些默认行为，而只执行自定义的逻辑，可以使用 e.preventDefault()。
### Props 定义

在 React 中，props 是 “properties” 的缩写，指的是组件的属性。props 是 React 组件用来传递数据的机制。父组件可以通过 props 向子组件传递数据或函数，从而实现组件之间的通信。props 的使用使得组件能够保持可重用和可配置

1. **如何向组件传递 props**
2. **如何从组件读取 props**
3. **如何为 props 指定默认值**
4. **如何给组件传递 JSX**
5. **如何传递和使用函数作为 props**
6. **如何使用 PropTypes 进行类型检查**
7. **props 如何随时间变化**
8. **使用 JSX 展开语法转发所有 props**

### 第一步：如何向组件传递和读取 props

我们首先创建一个父组件，并向子组件传递一些基本的 props。

```jsx
import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
    </div>
  );
}

function ParentComponent() {
  return (
    <div>
      <ChildComponent name="John Doe" />
    </div>
  );
}

export default ParentComponent;
```

在子组件中，通过 `props` 参数读取传递的数据。

```jsx
function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
    </div>
  );
}
```

### 第二步：如何使用解构语法读取 props

我们可以通过解构语法让代码更简洁。

```jsx
function ChildComponent({ name }) {
  return (
    <div>
      <p>Name: {name}</p>
    </div>
  );
}
```

### 第三步：如何为 props 指定默认值

为 props 指定默认值，当父组件未传递相应的 props 时使用默认值。

```jsx
function ChildComponent({ name = "Anonymous" }) {
  return (
    <div>
      <p>Name: {name}</p>
    </div>
  );
}
```

### 第四步：如何传递和使用对象作为 props

我们可以传递一个对象作为 props，并在子组件中使用。

```jsx
function ChildComponent({ person }) {
  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
    </div>
  );
}

function ParentComponent() {
  const user = { name: "John Doe", age: 30 };

  return (
    <div>
      <ChildComponent person={user} />
    </div>
  );
}

export default ParentComponent;
```

### 第五步：如何传递和使用函数作为 props

通过传递函数来实现子组件与父组件之间的交互。

```jsx
function ChildComponent({ person, onGreet }) {
  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={onGreet}>Greet</button>
    </div>
  );
}

function ParentComponent() {
  const user = { name: "John Doe", age: 30 };

  const greet = () => {
    alert(`Hello, ${user.name}`);
  };

  return (
    <div>
      <ChildComponent person={user} onGreet={greet} />
    </div>
  );
}

export default ParentComponent;
```

### 第六步：如何使用 PropTypes 进行类型检查

通过 PropTypes 检查传递给组件的 props 类型。

```jsx
import PropTypes from "prop-types";

function ChildComponent({ person, onGreet }) {
  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={onGreet}>Greet</button>
    </div>
  );
}

ChildComponent.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
  onGreet: PropTypes.func.isRequired,
};

function ParentComponent() {
  const user = { name: "John Doe", age: 30 };

  const greet = () => {
    alert(`Hello, ${user.name}`);
  };

  return (
    <div>
      <ChildComponent person={user} onGreet={greet} />
    </div>
  );
}

export default ParentComponent;
```

### 第七步：Props 如何随时间变化

通过父组件的 state 和 props 来展示 props 随时间变化的效果。

```jsx
function ChildComponent({ person, countdown }) {
  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Countdown: {countdown}</p>
    </div>
  );
}

ChildComponent.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }).isRequired,
  countdown: PropTypes.number.isRequired
};

export default ChildComponent;

function ParentComponent() {
  const [age, setAge] = useState(30);
  const [countdown, setCountdown] = useState(10);
  const user = { name: 'John Doe', age: age };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown > 0 ? prevCountdown - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const increaseAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <ChildComponent person={user} countdown={countdown} />
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default ParentComponent;
```

### 第八步：使用 JSX 展开语法转发所有 props

使用 JSX 展开语法将所有 props 转发给子组件。

```jsx
function ChildComponent({ name, age, onGreet }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={onGreet}>Greet</button>
    </div>
  );
}

function ParentComponent() {
  const user = { name: "John Doe", age: 30 };

  const greet = () => {
    alert(`Hello, ${user.name}`);
  };

  return (
    <div>
      <ChildComponent {...user} onGreet={greet} />
    </div>
  );
}

export default ParentComponent;
```

通过这些逐步增加的代码示例，你可以全面理解 React 中 `props` 的使用和功能。

<aside>
💡

Props 是只读的时间快照：每次渲染都会收到新版本的 props。
你不能改变 props。当你需要交互性时，你可以设置 state。

</aside>

# 引言

首先，让我们简单回顾一下上节课讲的 React 概念。React 是一个用于构建用户界面的 JavaScript 库，它由 Facebook 开发，主要用于构建单页面应用程序。React 使用组件化编程模型，可以将 UI 分解成小型的、可复用的组件。React 也被广泛使用于开发大型的 Web 应用程序。

现在我们来讲一下如何搭建 React 开发环境。在 React 中，最常用的工具是 create-react-app。Create-react-app 是一个由 React 官方提供的脚手架工具，它可以帮助开发者快速创建一个 React 应用的基础结构。使用 Create-react-app 可以避免手动配置 Webpack、Babel 等繁琐的工作，让开发者可以更加专注于应用的开发。

在开始之前，我们需要先安装 Node.js 和 npm，因为 create-react-app 需要使用它们。

Node.js 是一种开源的 JavaScript 运行时环境，基于 Google 的 V8 引擎构建，使得 JavaScript 可以脱离浏览器运行于服务器端，实现了 JavaScript 在后端编写和执行的能力。

npm 是 Node.js 平台的默认包管理器，也是前端开发中使用最广泛的包管理器之一。npm 的全称是 Node Package Manager，它提供了一种方便的方式来安装、更新、卸载和管理 Node.js 模块。同时，npm 也是一个包的注册表，开发者可以将自己开发的包上传到 npm 的注册表中，供其他开发者使用和下载。

# 环境搭建

## Windows 上安装 Node.js 和 npm 的步骤：

1. 打开 Node.js 官网 [**https://nodejs.org/en/，点击“Download”按钮，下载 Windows 版的 Node.js 安装程序。**](https://nodejs.org/en/%EF%BC%8C%E7%82%B9%E5%87%BB%E2%80%9CDownload%E2%80%9D%E6%8C%89%E9%92%AE%EF%BC%8C%E4%B8%8B%E8%BD%BDWindows%E7%89%88%E7%9A%84Node.js%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F%E3%80%82)

[Node.js](https://nodejs.org/en)

1. 运行下载的安装程序，选择“Run as administrator”，并按照安装向导的指示进行操作。默认情况下，Node.js 会安装在 C:\Program Files\nodejs 目录下。
2. 打开命令提示符窗口（可以按下 Win + R 键，输入 cmd 并回车，或者在 Windows 搜索框中输入 cmd 并打开），运行以下命令来验证 Node.js 是否已经正确安装：

   ```bash
   node -v
   ```

   如果安装成功，你应该能够看到 Node.js 的版本号输出。

3. 现在我们来安装 npm。打开命令提示符窗口，运行以下命令：

   ```bash
   npm install npm -g
   ```

   这个命令会从 npm 官方源安装最新版本的 npm，并将其全局安装到你的计算机上。

   <aside>
   💡 在Windows上，你可以通过以下步骤以管理员权限方式打开命令提示符或PowerShell：

   1. 打开“开始”菜单。
   2. 在搜索栏中键入“cmd”或“PowerShell”。
   3. 在搜索结果中，右键单击“命令提示符”或“PowerShell”。
   4. 选择“以管理员身份运行”。
   </aside>

4. 运行以下命令来验证 npm 是否已经正确安装：

   ```bash
   npm -v
   ```

   如果安装成功，你应该能够看到 npm 的版本号输出。

现在，你已经成功地安装了 Node.js 和 npm，可以开始在 Windows 上开发 React 应用程序了。

<aside>
💡 **node安装完就有npm了吧，为什么要单独再安装npm?**

在安装 Node.js 的过程中，npm 会自动地被安装到你的计算机上，所以在大多数情况下，你是不需要单独再安装 npm 的。

但是，有时候你可能需要安装 npm 的特定版本，或者你可能已经安装了 Node.js，但是由于某些原因，npm 的版本过旧或者出现了其他问题，导致你需要重新安装 npm。

在这种情况下，你可以通过运行以下命令来安装最新版本的 npm：

```bash
npm install npm -g
```

这个命令会从 npm 官方源下载最新版本的 npm，并将其全局安装到你的计算机上。这样做可以确保你使用的是最新版本的 npm，并且可能解决一些与旧版本 npm 相关的问题。

</aside>

## Mac 上安装 Node.js 和 npm 的步骤：

在 Mac 上安装 Node.js 可以通过以下几个简单步骤完成：

1. 打开 Node.js 官网

[Node.js](https://nodejs.org/en/)

1.  [**https://nodejs.org/en/，点击“Download”按钮，下载 Mac 版的 Node.js 安装程序。下载完成后，会自动打开一个磁盘映像文件（.dmg）。**](https://nodejs.org/en/%EF%BC%8C%E7%82%B9%E5%87%BB%E2%80%9CDownload%E2%80%9D%E6%8C%89%E9%92%AE%EF%BC%8C%E4%B8%8B%E8%BD%BDMac%E7%89%88%E7%9A%84Node.js%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F%E3%80%82%E4%B8%8B%E8%BD%BD%E5%AE%8C%E6%88%90%E5%90%8E%EF%BC%8C%E4%BC%9A%E8%87%AA%E5%8A%A8%E6%89%93%E5%BC%80%E4%B8%80%E4%B8%AA%E7%A3%81%E7%9B%98%E6%98%A0%E5%83%8F%E6%96%87%E4%BB%B6%EF%BC%88.dmg%EF%BC%89%E3%80%82)
2.  双击磁盘映像文件，打开安装程序。按照安装向导的指示进行操作，一般来说，只需要一路点击“Continue”和“Install”按钮，然后输入管理员密码即可。
3.  安装完成后，打开终端（Terminal）应用程序（可以通过在 Launchpad 中搜索 Terminal 来找到它），运行以下命令来验证 Node.js 是否已经正确安装：

    ```jsx
    node - v;
    ```

    如果安装成功，你应该能够看到 Node.js 的版本号输出。

4.  现在我们来安装 npm。在终端中运行以下命令：

    ```bash
    npm install npm -g
    ```

    这个命令会从 npm 官方源下载最新版本的 npm，并将其全局安装到你的计算机上。

5.  运行以下命令来验证 npm 是否已经正确安装：

    ```bash
    npm -v
    ```

    如果安装成功，你应该能够看到 npm 的版本号输出。

现在，你已经成功地安装了 Node.js 和 npm，可以开始在 Mac 上开发 React 应用程序了。

## 在确保你已经安装好了 Node.js 和 npm 后，我们可以通过以下命令来安装 create-react-app：

```bash

npm install -g create-react-ap
```

接下来，我们创建一个新的 React 项目。在命令行中，进入你想要创建项目的目录，然后运行以下命令：

```bash
create-react-app my-app
```

这个命令会在当前目录下创建一个名为**`my-app`**的新目录，并在其中初始化一个 React 项目。这个过程可能需要一些时间来下载和安装依赖项。

现在我们进入**`my-app`**目录，并运行以下命令来启动 React 应用程序：

```bash
cd my-app
npm start
```

这个命令将启动开发服务器，并在默认浏览器中打开 React 应用程序。你应该能够看到一个 React 应用程序的欢迎页面。

现在我们来看一下默认创建的 React 应用程序的代码。React 应用程序的入口点是**`src/index.js`**文件，它包含以下代码：

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
```

这个文件引入了 React 和 ReactDOM，并渲染了一个 App 组件。我们可以在**`src/App.js`**文件中找到这个组件的代码：

```jsx
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

## React 目录结构介绍

React 项目的目录结构对于开发者来说非常重要，因为它能够帮助我们组织代码、管理资源、提高可读性等。

在前面的课程中，我们已经成功创建了一个 React 应用程序。下面我们来看一下它的目录结构：

```jsx
my - app / README.md;
node_modules / package.json;
public / index.html;
favicon.ico;
src / App.css;
App.js;
App.test.js;
index.css;
index.js;
logo.svg;
```

- **`README.md`**: 项目的说明文档。
- **`node_modules/`**: 用于存放项目依赖的第三方模块。
- **`package.json`**: 用于描述项目的元数据和依赖关系，也可以用来执行各种命令。
- **`public/`**: 用于存放公共资源，例如静态 HTML 文件、图像等。
- **`src/`**: 用于存放项目的源代码，包括 JavaScript、CSS、图片等文件。

其中，**`index.js`**是我们 React 应用程序的入口文件，它使用 ReactDOM 库将组件渲染到页面中。**`App.js`**则是我们创建的第一个 React 组件，它可以被其他组件嵌套和调用。

在实际的开发过程中，我们可能会对目录结构进行一些调整，例如创建新的目录存放组件、分离 CSS 文件、引入 Redux 等。但是 React 应用程序的基本目录结构和文件命名规则是固定的，我们应该遵循这些规则来保持代码的可读性和可维护性。

以上就是 React 环境搭建的课程的完整内容，希望能够帮助你入门 React 开发。下节课我们讲 Jsx 语法

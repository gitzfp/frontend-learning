CSS3允许用户自定义字体类型，通过@font-face声明来加载自定义字体文件，让客户端浏览器显示客户端所没有安装的字体。

## **@font-face规则语法格式**

```css
@font-face { <font-description> }
```

@font-face规则使用固定选择符来引用自定义的字体文件。**`<font-description>`**是一个属性名值对的集合，具有以下属性及其取值：

- **`font-family`**：设置文本的字体名称。
- **`font-style`**：设置文本样式。
- **`font-variant`**：设置文本是否大小写。
- **`font-weight`**：设置文本的粗细。
- **`font-stretch`**：设置文本是否横向拉伸变形。
- **`font-size`**：设置文本字体大小。
- **`src`**：设置自定义字体的相对路径或绝对路径，仅能在@font-face规则内使用。

## **浏览器兼容性**

不同浏览器对@font-face规则的支持有所差异。IE5起支持@font-face规则，但仅支持微软的.eot（Embedded Open Type字体格式。其他浏览器直到Safari 3.1才开始支持.ttf（TrueType）和.otf（OpenType）两种字体格式作为自定义字体。为了兼容主流浏览器，建议同时定义.eot和.ttf字体格式。

## **示例**

以下是一个简单的示例代码，展示了如何使用@font-face规则：

```html
<style type="text/css">
/* 引入外部字体文件 */
@font-face {
    /* 选择自定义的字体类型 */
    font-family: "lexograph";
    /* 兼容IE */
    src: url("./lexograph.eot");
    /* 兼容非IE */
    src: local("Lexographer"), url("./lexograph.ttf") format("truetype");
}

h1 {
    /* 设置引入字体文件中的lexograph字体类型 */
    font-family: lexograph, verdana, sans-serif;
    font-size: 4em;
}
</style>

<h1>http://www.baidu.com/</h1>
```

**lexograph.eot和lexograph.ttf可以在http://randsco.com/fonts/lexograph.ttf下载**

使用**`local("Lexographer")`**是为了指定在用户计算机上已安装的与字体名称匹配的本地字体。如果您在本地计算机上没有安装名为"Lexographer"的字体，或者没有其他与之匹配的字体，那么在**`@font-face`**规则中使用**`local("Lexographer")`**将没有效果。

在这种情况下，浏览器会继续尝试加载**`url("./lexograph.ttf")`**指定的字体文件。如果字体文件可以被成功加载并满足浏览器的字体要求，它将被应用于相应的元素，而不会使用本地字体。

因此，在没有本地字体或没有与之匹配的本地字体的情况下，您可以直接使用**`url("./lexograph.ttf")`**，而不必使用**`local("Lexographer")`**。这样可以简化代码并保持字体的一致性，而不会对字体的可用性产生影响。

但是，如果您知道特定字体在用户计算机上可用，并且希望首先使用本地字体而不是加载外部字体文件，那么您可以继续使用**`local("Lexographer")`**以确保字体在用户计算机上的可用性。

文本换行涉及 **`word-wrap`**、**`word-break`** 和 **`white-space`**三个CSS属性，这三个属性都用于控制文本在容器中的换行和空白符处理方式，但它们的作用和行为略有不同。

**`word-wrap`** 控制单词的换行方式，**`word-break`** 控制单词是否拆分换行，而 **`white-space`** 控制空白符和换行符的处理方式。

| 属性 | 描述 | 可取值 | 适用场景 |
| --- | --- | --- | --- |
| word-wrap | 用于指定是否允许长单词或URL地址换行，以及换行的方式。 | normal单词不会被分割，只有在必要的情况下才会断行
break-word 如果一个单词太长无法适应容器宽度，它将被强制断行 | 当处理包含长单词或URL地址的英文等拉丁字符集文本 |
| word-break | 控制中日韩（CJK）文本的断行行为 | normal,break-word, break-all， keep-all
在其他模式下，英文单词会在必要的情况下断行，而中文单词会在文字之间断行。而在keep-all
英文单词不会被分割，中文单词会保持在同一行上，直到碰到标点符号 | 当需要处理非拉丁字符集（如中文、日文、韩文等）的文本时，可能需要使用word-break来处理换行 |
| white-space | 控制空白字符的处理方式以及是否允许文本换行。 | normal用于合并连续空白字符并根据容器宽度进行换行。nowrap强制文本在一行上显示，pre保留源代码格式并显示，pre-wrap保留源代码格式并根据需要自动换行，pre-line根据需要自动换行并忽略大部分空格和换行符。 | 当你需要控制空白字符的显示方式和换行行为时，使用white-space属性 |

# **`word-wrap`** 示例：

考虑一个包含长英文文本的容器，宽度有限，我们想要确保文本在容器内自动换行，而不会溢出容器。

HTML代码：

```html

    <p class="container normal">This is a longwordwithoutanyspacesanditcannotbebroken</p>
    <p class="container break-word">This is a longwordwithoutanyspacesanditcannotbebroken</p>

```

CSS代码：

```css
.container {
      width: 150px;
      border: 1px solid black;
      padding: 10px;
  }

  .normal {
      word-wrap: normal;
  }

  .break-word {
      word-wrap: break-word;
  }
```

在这个例子中:

在**`normal`**模式下，英文单词会在必要的情况下断行，而中文单词会在字符之间断行。而在**`keep-all`**英文单词不会被分割，中文单词会保持在同一行上。

# **`word-break`** 示例：

```html
<div class="container normal">
            This is a longwordwithoutanyspacesanditwillnotbreak.
</div>

<div class="container break-word">
    This is a longwordwithoutanyspacesanditwillbreak.
</div>

<div class="container break-all">
    This is a longwordwithoutanyspacesanditwillbreak.
</div>

<div class="container keep-all">
    这是一个很长的中文单词，不会在字符之间断行。
</div>

```

CSS代码：

```css

.normal {
    word-break: normal;
 }
.break-word {
    word-break: break-word;
}

.break-all {
    word-break: break-all;
}

.keep-all {
    word-break: keep-all;
}
```

**`normal`**模式下，英文单词会在必要的情况下断行，而中文单词会在字符之间断行。

**`break-word`**会尝试在长单词或无空格文本中进行换行

**`break-all`**则会在任意字符间断处进行换行，无论是否是长单词。

**`keep-all`**英文单词不会被分割，中文单词会保持在同一行上。

# **`white-space`**示例：

当涉及到 **`white-space`** 属性时，以下是一个实际例子，以帮助你更好地理解它的用法：

考虑一个包含多行文本的容器，我们希望文本保持原始的空白字符和换行符，并在容器内自动换行。

 CSS代码：

```css
.normal {
  white-space: normal;
}

.nowrap {
  white-space: nowrap;
}

.pre {
  white-space: pre;
}

.pre-wrap {
  white-space: pre-wrap;
}

.pre-line {
  white-space: pre-line;
}
```

 HTML代码：

```html
<div class="container normal">
  This is a long text that will wrap when it reaches the container's width.
</div>

<div class="container nowrap">
  This is a long text that will not wrap and will overflow the container.
</div>

<div class="container pre">
  This is a long text
  with multiple lines
  that will be displayed
  exactly as it is in the source code.
</div>

<div class="container pre-wrap">
  This is a long text
  with multiple lines
  that will wrap when it reaches the container's width.
</div>

<div class="container pre-line">
  This is a long text
  with multiple lines
  that will wrap when it reaches the container's width,
  but consecutive white spaces will be collapsed into one space.
</div>
```

在这个例子中，**`white-space: pre-wrap`** 属性告诉浏览器保留原始的空白字符和换行符，同时允许文本在容器内自动换行。这样，文本将根据需要在容器内进行换行，保留原始文本的格式和布局。
**`normal`**用于合并连续空白字符并根据容器宽度进行换行

**`nowrap`**用于合并连续空白字并强制文本在一行上显示

**`pre`**保留源代码格式并显示

**`pre-wrap`**保留源代码格式并根据需要自动换行

**`pre-line`**根据需要自动换行并忽略大部分空格和换行符

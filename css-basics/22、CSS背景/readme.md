## 常见的背景属性有以下几个：

- `background-color:#ff99ff;` 设置元素的背景颜色。
- `background-image:url(images/2.gif);` 将图像设置为背景。
- `background-repeat: no-repeat;` 设置背景图像是否重复及如何重复，默认平铺满。（重要）
    - `no-repeat`不要平铺；
    - `repeat-x`横向平铺；
    - `repeat-y`纵向平铺。
- `background-position:center top;` 设置背景图像在当前容器中的位置。
- `background-attachment:scroll;` 设置背景图像是否跟着滚动条一起移动。 属性值可以是：`scroll`（与fixed属性相反，默认属性）、`fixed`（背景就会被固定住，不会被滚动条滚走）。
- 另外还有一个综合属性叫做`background`，它的作用是：将上面的多个属性写在一个声明中。

上面这几个属性经常用到，需要记住。现在我们逐个进行讲解。

## 一、background-color：背景颜色的表示方法

css2.1 中，常见的颜色表示方法有四种：单词、rgb表示法、rgba表示法、十六进制表示法。

比如红色可以有下面的三种表示方法：

```css
background-color: red;
background-color: rgb(255,0,0);
background-color: rgba(255,0,0,0.5);
background-color: #ff0000;
```

### 用英语单词表示

能够用英语单词来表述的颜色，都是简单颜色，比如red、green、blue、orange、gray等。代码举例：

```css
background-color: red;
```

### RGB 表示法

RGB 表示三原色“红”red、“绿”green、“蓝”blue。

光学显示器中，每个像素都是由三原色的发光原件组成的，靠明亮度不同调成不同的颜色的。r、g、b的值，每个值的取值范围0~255，一共256个值。

比如红色：

```css
background-color: rgb(255,0,0);
```

黑色：

```css
background-color: rgb(0,0,0);
```

颜色可以叠加，比如黄色就是红色和绿色的叠加：

```
background-color: rgb(255,255,0);
```

### RGBA 表示法

```css
    background-color: rgba(0, 0, 255, 0.3);
    border: 30px solid rgba(0, 255, 0, 0.3);
```

**代码解释**：

- RGBA 即：Red 红、Green 绿、Blue 蓝、Alpha 透明度。
- R、G、B 的取值范围是：0~255；透明度的取值范围是0～1。

**RGB色彩模式：**

- 自然界中绝大部分颜色都可以用红、绿、蓝(RGB)这三种颜色波长的不同强度组合而得，这就是人们常说的三原色原理。
- RGB三原色也叫加色模式，这是因为当我们把不同光的波长加到一起的时候，可以得到不同的混合色。例：红+绿=黄色，红+蓝＝紫色，绿+蓝=青。
- RGB各有256级(0-255)亮度，256级的RGB色彩总共能组合出约1678万种色彩，即256×256×256=16777216。

在数字视频中，对RGB三基色各进行8位编码就构成了大约1678万种颜色，这就是我们常说的真彩色。所有显示设备都采用的是RGB色彩模式。

### 十六进制表示法

比如红色：

```css
background-color: #ff0000;
```

所有用`#`开头的色值，都是16进制的。

这里，我们就要学会16进制与10进制之间的转换。下面举几个例子。

问：16进制中的28等于10进制的多少？ 答：2*16+8 = 40。

16进制中的af等于10进制的多少？ 答：10 * 16 + 15 = 175

以此类推：

- #ff0000等于rgb(255,0,0)。
- `background-color: #123456;`等价于`background-color: rgb(18,52,86);`

**十六进制可以简化为3位，所有#aabbcc的形式，能够简化为#abc**。举例如下：

比如：

```css
	background-color:#ff0000;
```

等价于：

```css
	background-color:#f00;
```

比如：

```css
	background-color:#112233;
```

等价于：

```css
	background-color:#123;
```

但是，比如下面这个是无法简化的：

```css
	background-color:#222333;
```

再比如，下面这个也是无法简化的：

```css
	background-color:#123123;
```

几种常见的颜色简写可以记住。如下：

```css
	#000   黑
	#fff   白
	#f00   红
	#222   深灰
	#333   灰
	#ccc   浅灰
```

**关于设置透明度的其他方式：**

（1）`opacity: 0.3;` 会将整个盒子及子盒子设置透明度。也就是说，当盒子设置半透明的时候，会影响里面的子盒子。

（2）`background: transparent;` 可以单独设置透明度，但设置的是完全透明（不可调节透明度）。

## 二、`background-image`属性

```css
background-image: url(./iamges/background1.jpg)
```

## 三、`background-repeat`属性

`background-repeat:no-repeat;`设置背景图片是否重复及如何重复，默认平铺满。属性值可以是：

- `no-repeat`（不要平铺）
- `repeat-x`（横向平铺）
- `repeat-y`（纵向平铺）

 PS：padding的区域也是有背景图的。

## 四、`background-position`属性

`background-position`属性指的是**背景定位**属性。公式如下：

在描述属性值的时候，有两种方式：用像素描述、用单词描述。下面分别介绍。

**1、用像素值描述属性值：**

格式如下：

```css
background-position:向右偏移量 向下偏移量;
```

属性值可以是正数，也可以是负数。比如：`100px 200px`、`-50px -120px`。

**2、用单词描述属性值：**

格式如下：

```css
	background-position: 描述左右的词 描述上下的词;
```

- 描述左右的词：left、center、right
- 描述上下的词：top 、center、bottom

比如说，`right center`表示将图片放到右边的中间；`center center`表示将图片放到正中间。

比如说，`bottom`表示图片的底边和父亲**底边贴齐**（好好理解）。

如果没加`background-position`这个属性，背景图会默认处于浏览器的左上角

## 五、`background-size`属性

`background-size`属性：设置背景图片的尺寸。

格式举例：

```css
	/* 宽、高的具体数值 */
	background-size: 500px 500px;

	/* 宽高的百分比（相对于容器的大小） */
	background-size: 50% 50%;   // 如果两个属性值相同，可以简写成：background-size: 50%;

	background-size: 100% auto;  //这个属性可以自己试验一下。

	/* cover：图片始终填充满容器，且保证长宽比不变。图片如果有超出部分，则超出部分会被隐藏。 */
	background-size: cover;

	/* contain：将图片完整地显示在容器中，且保证长宽比不变。可能会导致容器的部分区域为空白。  */
	background-size: contain;
```

这里我们对属性值 `cover` 和 `contain` 进行再次强调：

- `cover`：图片始终**填充满**容器，且保证**长宽比不变**。图片如果有超出部分，则超出部分会被隐藏。
- `contain`：将图片**完整地**显示在容器中，且保证**长宽比不变**。可能会导致容器的部分区域留白。

代码举例：（这张图片本身的尺寸是 390 * 390）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS背景</title>
    <style>
        .img {
            width: 250px;
            height: 100px;
            background: url(./images/lyf.jpg);
            background-repeat: no-repeat;
        }
        .div1 {
            background-size: cover;
            background-color: yellow;
            margin-bottom: 20px;
        }

        .div2 {
            background-size: contain;
            background-color: red;
						background-position: center;
        }
    </style>
</head>

<body>
    <div class="img div1">

    </div>

    <div class="img div2">

    </div>

</body>
</html>
```

效果如下：

![Screenshot 2023-07-23 at 20.05.03.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3bb9b29d-a6fc-4a5f-9387-1aa81ed66768/Screenshot_2023-07-23_at_20.05.03.png)

在上方代码的基础之上，再加一个 `background-position: center`属性之后，图片就会在容器里**居中显示**

## 六、background-attachment 属性

- `background-attachment:scroll;` 设置背景图片是否固定。属性值可以是：
    - `fixed`（背景就会被固定住，不会被滚动条滚走）。
    - `scroll`（与fixed属性相反，默认属性）

## 七、background 综合属性

background属性和border一样，是一个综合属性，可以将多个属性写在一起。(在[盒子模型](http://www.cnblogs.com/smyhvae/p/7256371.html)这篇文章中专门讲到border)

举例1:

```css
	background:red url(1.jpg) no-repeat 100px 100px fixed;
```

等价于：

```css
	background-color:red;
	background-image:url(1.jpg);
	background-repeat:no-repeat;
	background-position:100px 100px;
	background-attachment:fixed;
```

以后，我们可以用小属性层叠掉大属性。

上面的属性中，可以任意省略其中的一部分。

比如说，对于下面这样的属性：

```css
	background: blue url(images/background1.jpg) no-repeat 100px 100px;
```

效果如下：

![Screenshot 2023-07-23 at 17.10.45.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a89c38ac-761e-4733-ad9b-407da737d10e/Screenshot_2023-07-23_at_17.10.45.png)

CSS的定位属性有四种，分别是相对定位、绝对定位、固定定位和静态定位。

```css
position: absolute;  <!-- 绝对定位 -->
position: relative;  <!-- 相对定位 -->
position: fixed;     <!-- 固定定位 -->
position: static;    <!-- 静态定位 -->
```

# 1.相对定位

### 1.1 了解相对定位的原理和概念

相对定位通过微调元素的位置来调整其在正常文档流中的位置，但不会脱离文档流。

简而言之，让元素相对于自己原来的位置，进行位置调整

### 1.2 相对定位的属性和用法

使用**`position: relative;`**启用相对定位，并通过**`top`**、**`right`**、**`bottom`**和**`left`**属性来进行微调。

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .container {
    width: 400px;
    height: 400px;
    background-color: rgb(252, 242, 210);
    position: relative;
  }
  .box1 {
    width: 110px;
    height: 110px;
    background-color: rgb(98, 151, 103);
    position: relative;
    top: 50px;
    left: 50px;
  }
  .box2 {
    width: 110px;
    height: 110px;
    background-color: red
  }
</style>
</head>
<body>

<div class="container">
  <div class="box1"></div>
  <div class="box2"></div>
</div>

</body>
</html>
```

![Screenshot 2023-08-13 at 16.25.45.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8dec42e-842a-44bb-8c59-09a3dfcc3098/Screenshot_2023-08-13_at_16.25.45.png)

1.3 实际案例演示：创建卡片式布局

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .card {
    width: 300px;
    background-color: white;
    border: 1px solid gray;
    position: relative;
    margin: 20px;
  }
  .title {
    background-color: lightblue;
    padding: 10px;
    position: relative;
    top: -10px;
    left: 10px;
  }
  .content {
    padding: 10px;
  }
</style>
</head>
<body>

<div class="card">
  <div class="title">Card Title</div>
  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula justo nec ligula commodo, ac volutpat arcu facilisis.
  </div>
</div>

</body>
</html>
```

# 2.绝对定位

### 2.1 探索绝对定位的原理和概念

绝对定位将元素从正常文档流中脱离，相对于最近的postion不为static的父元素或根元素进行定位。

### 2.2 绝对定位的属性和用法

使用**`position: absolute;`**启用绝对定位，通过**`top`**、**`right`**、**`bottom`**和**`left`**属性进行精确定位。

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .container {
    width: 300px;
    height: 200px;
    background-color: lightgray;
    position: relative;
  }
  .box {
    width: 50px;
    height: 50px;
    background-color: blue;
    position: absolute;
    top: 50px;
    left: 100px;
  }
</style>
</head>
<body>

<div class="container">
  <div class="box"></div>
</div>

</body>
</html>
```

### 2.3 绝对定位的实际应用

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .navbar {
    width: 100%;
    background-color: lightgray;
    position: relative;
    height: 50px;
  }
  .dropdown {
    position: absolute;
    top: 40px;
    right: 20px;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    border: 1px solid gray;
    top: 25px;
    right: 0;
  }
  .navbar:hover .dropdown-content {
    display: block;
  }
</style>
</head>
<body>

<div class="navbar">
  Navigation Bar
  <div class="dropdown">
    <span>Dropdown</span>
    <div class="dropdown-content">
      <a href="#">Option 1</a>
      <a href="#">Option 2</a>
      <a href="#">Option 3</a>
    </div>
  </div>
</div>

</body>
</html>
```

# 3.固定定位

### 3.1 探讨固定定位的原理和概念

固定定位将元素相对于浏览器窗口进行定位，使其保持固定位置，即使页面滚动。

### 3.2 固定定位的属性和用法

使用**`position: fixed;`**启用固定定位，通过**`top`**、**`right`**、**`bottom`**和**`left`**属性进行定位。

```html
<!DOCTYPE html >
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
		}
        body{
			padding-top: 60px;
			/*IE6不兼容固定定位，所以这个padding没有什么用，就去掉就行了*/
			_padding-top:0;
		}
		.nav{
			position: fixed;
			top: 0;
			left: 0;
	 		width: 100%;
			height: 60px;
			background-color: #333;
			z-index: 99999999;
		}
		ul{
            width: 1000px;
			height: 60px;
			margin: 0 auto;
			list-style: none;
		}
		ul li{
			float: left;
			width: 100px;
			height: 60px;
			text-align: center;
			line-height: 60px;
		}
		ul li a{
			display: block;
			height: 60px;
			color:white;
			text-decoration: none;
		}
		ul li a:hover{
			background-color: gold;
		}
		p{
			font-size: 30px;
            height: 1000px;
            background-color: antiquewhite;
		}
		.btn{
			display: block;
			width: 120px;
			height: 30px;
			background-color: orange;
			position: relative;
			top: 2px;
			left: 1px;
		}
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: lightblue;
            padding: 10px;
        }
	</style>
</head>
<body>
	<div class="nav">
        <ul>
            <li><a href="#">盒模型</a></li>
            <li><a href="#">背景</a></li>
            <li><a href="#">浮动</a></li>
            <li><a href="#">定位</a></li>
            <li><a href="#">布局</a></li>
            <li><a href="#">字体样式</a></li>
            <li><a href="#">超链接样式</a></li>
            <li><a href="#">表格和表单</a></li>
            <li><a href="#">CSS动画</a></li>
        </ul>
    </div>
    <div class="back-to-top">Back to Top</div>
    <p></p>
    <script>
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            document.querySelector('.back-to-top').textContent = 'Back to top';
        } else {
            document.querySelector('.back-to-top').textContent = 'Back to buttom';
        }
    });
    document.querySelector('.back-to-top').addEventListener('click', function() {
        if(document.querySelector('.back-to-top').textContent == 'Back to top'){
            window.scroll(0, 0)
        }else{
            window.scroll(0, 1000)
        }
    })
    </script>
</body>
</html>
```

# 4、静态定位与文档流

### 4.1 理解静态定位和文档流的关系

静态定位是默认的定位方式，元素遵循文档流放置。

### 4.2 如何使用静态定位

大多数元素默认是静态定位的，不需要额外的定位属性，或者设置postion: static。

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .static-box {
    width: 100px;
    height: 100px;
    background-color: lightgreen;
  }
</style>
</head>
<body>

<div class="static-box">Static Box</div>

</body>
</html>

```

通过这些实际的代码示例，我们深入探讨了相对定位、绝对定位、固定定位和静态定位的原理、属性和应用。通过编写和调试这些代码，你将能够更好地理解如何使用不同的定位技术来实现各种页面布局

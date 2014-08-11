CSS:响应式导航菜单
=================

之前我（原文作者）已经写过关于如何制作响应式设计的[mobile navigation ](http://webdesignerwall.com/tutorials/mobile-navigation-design-tutorial)手机导航的教程，但现在我发现一个新的技术，不用javascript去制作响应式菜单。它使用了简洁和语义化的html5标签。菜单可以向左，中间或右对齐。不像之前的教程，只能点击切换，现在这个菜单鼠标放上去切换显得用户体验更友好些。它还有一个指示去说明选中的菜单选项。它还可以在所有移动端和包括IE在内的桌面浏览器中运行。

> [响应式菜单demo](http://webdesignerwall.com/demo/responsive-menu/)

### 目的
本教程的目的是告诉你如何把一个普通列表菜单变成下拉菜单显示在更小的屏幕上。

![图片](http://webdesignerwall.com/wp-content/uploads/2013/01/purpose-of-responsive-menu.png)

这种做法对带有许多链接的导航更有用些，如下图。你可以将所有的按钮集成一个优雅的下拉菜单。

![图片](http://webdesignerwall.com/wp-content/uploads/2013/01/purpose-of-responsive-menu-2.png)

###导航的html标签

这个是导航的标签。<nav>这个标签是创建下拉菜单的，同时需要给这个标签绝对定位的属性。我将在教程的最后说明这个标签。`.current`这个class是指选中的菜单选项。

```html
<nav class="nav">
	<ul>
		<li class="current"><a href="#">Portfolio</a></li>
		<li><a href="#">Illustration</a></li>
		<li><a href="#">Web Design</a></li>
		<li><a href="#">Print Media</a></li>
		<li><a href="#">Graphic Design</a></li>
	</ul>
</nav>
```

###CSS

导航的css样式（PC端）是非常简单的，所以我（原文作者）不打算进入细节。注意，我（原文作者）将nav中的<li>元素的浮动`float:left`用`display:inline-block`代替。因为这样做允许菜单的按钮能够向左，中间或右对齐，通过设置`<ul>`标签的`text-align`的属性。

```css
/* nav */
.nav {
	position: relative;
	margin: 20px 0;
}
.nav ul {
	margin: 0;
	padding: 0;
}
.nav li {
	margin: 0 5px 10px 0;
	padding: 0;
	list-style: none;
	display: inline-block;
}
.nav a {
	padding: 3px 12px;
	text-decoration: none;
	color: #999;
	line-height: 100%;
}
.nav a:hover {
	color: #000;
}
.nav .current a {
	background: #999;
	color: #fff;
	border-radius: 5px;
}
```
###向中间和右对齐

如上所述，你可以使用`text-align`属性来改变按钮的对齐方式。

```css
/* right nav */
.nav.right ul {
	text-align: right;
}

/* center nav */
.nav.center ul {
	text-align: center;
}
```
###支持Internet Explorer

HTML5  `<nav>`和媒体查询对IE8及以下版本不支持。因此需要引入[css3-mediaqueries.js](https://code.google.com/p/css3-mediaqueries-js/)（或[respond.js](https://github.com/scottjehl/Respond)）和[html5shim.js](https://code.google.com/p/html5shim/)。如果你不想引入html5shim.js，可以用`div`标签代替`nav`标签。

```html
<!--[if lt IE 9]>
	<script src="http://css3-mediaqueries-js.googlecode.com/files/css3-mediaqueries.js"></script>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

###响应式（Responsive）
来到了教程的有趣部分-用媒体查询制作响应式菜单！如果你对响应式设计不熟悉，可以看我之前写关于[responsive design](http://webdesignerwall.com/tutorials/responsive-design-in-3-steps)和[media query](http://webdesignerwall.com/tutorials/css3-media-queries)的文章。

大约600px断点的时候，设置nav元素为相对定位（position:relative），<ul>元素设置为绝对定位（position:absolute），将<ul>菜单列表放置顶部(top)。然后将所有<li>元素设置为`display:none`隐藏掉，但通过`.current`的属性设置为`display:block`来让<li>显示。然后鼠标放上或离开（hover）nav标签的时候，设置所有`<li>`为`display:block`（这是产生下拉菜单的结果）。我在`.current`元素上增加一个确认的图形icon去指示选中项。为了菜单能够向中间和右对齐，使用`left`和`right`属性去定位`<ul>`列表。

[demo展示](http://webdesignerwall.com/demo/responsive-menu/)

```css
@media screen and (max-width: 600px) {
	.nav {
		position: relative;
		min-height: 40px;
	}	
	.nav ul {
		width: 180px;
		padding: 5px 0;
		position: absolute;
		top: 0;
		left: 0;
		border: solid 1px #aaa;
		background: #fff url(images/icon-menu.png) no-repeat 10px 11px;
		border-radius: 5px;
		box-shadow: 0 1px 2px rgba(0,0,0,.3);
	}
	.nav li {
		display: none; /* hide all <li> items */
		margin: 0;
	}
	.nav .current {
		display: block; /* show only current <li> item */
	}
	.nav a {
		display: block;
		padding: 5px 5px 5px 32px;
		text-align: left;
	}
	.nav .current a {
		background: none;
		color: #666;
	}

	/* on nav hover */
	.nav ul:hover {
		background-image: none;
	}
	.nav ul:hover li {
		display: block;
		margin: 0 0 5px;
	}
	.nav ul:hover .current {
		background: url(images/icon-check.png) no-repeat 10px 7px;
	}

	/* right nav */
	.nav.right ul {
		left: auto;
		right: 0;
	}

	/* center nav */
	.nav.center ul {
		left: 50%;
		margin-left: -90px;
	}
	
}
```

>   本文译自：[http://webdesignerwall.com/tutorials/css-responsive-navigation-menu](http://webdesignerwall.com/tutorials/css-responsive-navigation-menu)





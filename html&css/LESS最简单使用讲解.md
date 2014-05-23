HTML&CSS规范
===========

一直以来，我写代码就是自己怎么写的爽就怎么写，至于规范什么的，也没有太在意，但是最近我发现规范的代码真的很重要，原因都懂的，以下是此标题的笔记：

- __HTML语法规范__

> - 不要在自闭合元素的尾部添加斜线（ps: html5规范明确说明这是可选的）
> - 看到这个规范的时候，我很纠结，究竟是加还是不加呢？按严格来说是要加的，但是我看了百度，腾讯，京东的有些页面都没加。。。。
> - 最后得出的结果是，最好加，xhtml是要求加斜线，但是在html5中可以不加。

```html
	<img src="xxx.jpg" alt="">
```

- __HTML语言属性__

强烈建议在html根元素指定lang属性，从而为文档设置正确的语言。
好处： 有助于语音合成工具确定其所应该采取的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。

> - [更多知识参考这里]（https://github.com/basecss/Lab/edit/master/docs/simple-guide-for-template.md）
> - [语言代码表]（http://www.sitepoint.com/web-foundations/iso-2-letter-language-codes/）

```html
	<html lang="zh-cmn-Hans">
		<!-- 简体中文 -->
	</html>

	<html lang="zh-cmn-Hant">
		<!-- 繁体中文 -->
	</html>
```

- __HTML-IE兼容模式__

IE支持通过特定的<meta>标签来确定绘制当前页面所应该采用的IE版本。

> － [更多知识](http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e)

```html
<meta http-equiv="X-UA-Compatible" content="IE-Edge">
```

- __字符编码__

声明字符编码，能够确保浏览器快速判断页面内容的渲染方式，一般采用utf-8编码。

好处：可以避免在html中使用字符实体标记，从而全部与文档编码一致

```html
<head>
	<meta charset="UTF-8">
</head>
```

- __HTML-引入css和js文件__

根据html5规范，在引入css和js文件时，不需要type属性，因为`text/css`和`text/javascript`分别是他们的默认值。

```html
<style src="xxx.css"></style>
<script src="xxx.js"></script>
```	

- __HTML-实用为王__

尽量遵循html标准和语义，但不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。

- __HTML-属性顺序__

ps：我觉得这个很有用，对代码的易读性。

属性顺序应该遵循以下规则：

> - `class`
> - `id`, `name`
> - `data-*`
> - `src`, `for`, `type`, `href`
> - `title`, `alt`
> - `araia-*`, `role`

```html
<input class="" id="" name="" data-name="" type="text" value="">
<a class="" id="" data-url="" href="" title=""></a>
<img class="" id="" data-img="" src="" alt="">
```

- __HTML-布尔型属性__

xhtml规范要求要赋值，但是html5中不需要赋值。

note：元素布尔型属性如果有值，就是true，否则就是false，ps:这个是正对html5说明的。

```html
<input type="text" disabled><!-- html5 -->
<input type="text" disabled="disabled"><!-- xhtml -->
```

- __HMTL-减少标签的数量__

编写html时，尽量避免多余的父元素。

```html
<!-- bad -->
<span><img src="" alt=""></span>

<!--better-->
<img src="" alt="">
```

- __HTML-JS生成的标签__

通过js生成的标签让内容变得不易查找，编辑，并且降低性能。能避免则避免。

－ __CSS语法规范__

> - 为了代码的易读性，在每个声明块的左花括号前添加一个空格；
> - 每条声明语句的`：`后应该插入一个空格；
> - 所有声明语句都应当以分号结尾；
> - 属性值或颜色参数，省略小于1的小数面的0，如：`0.5px`->`.5px`；
> - 十六进制值应该全部小写，如：`#fff`.ps：小写易于分辨，形式更易于区分；
> - 尽量使用简写的十六进制值，如：`＃ffffff` -> `#fff`;
> - 避免为0指定单位，如：`padding:0px` -> `padding:0`;

```css
.useless {
	width: 100%;
	margin: .5px;
	padding: 0;
	color: #fff;
}
```

－ __CSS声明顺序__

声明顺序如下：

> - position
> - box model
> - typographic
> - visual

```css
.useless {
	/* position */
	position: relative;
	top: 0;
	left: 0;

	/* box model */
	display: block;
	float: left;
	width: 100%;
	height: 100%;

	/* typographic */
	color: #fff;
	font-size: 14px;

	/* visual */
	border: 1px solid #000;
	background-color: #ccc;

	/* misc */
	opacity: 1;
}
```

- __CSS简写形式的属性声明__

应当尽量限制使用简写形式的属性声明。因为过度使用简写形式的属性声明会导致导致代码混乱，且对属性值带来不必要的覆盖从而引起的副作用。

```css
.useless {
	/* bad */
	margin: 0 0 0 110px;

	/* better */
	margin-left: 110px;
}
```

- __CSS-class命名__

> - class名称中只能出现小写字符和破折号（不是下划线，也不是驼峰命名法），如：`.btn-danger`;
> - 避免过度任意的简写；
> - class名称应当尽可能短，并且意义明确；
> - 使用有意义的名称，使用有组织的或明确的名称，不要使用表现形式的名称；
> - 基于最近的父class或基于class作为新class的前缀；
> - 使用`.js-*`class来标识行为，并且不要将这些class包含到css文件中。

```html
<section class="useless">
	<p class="useless-title"></p>
	<article class="useless-content">
		<ul class="useless-list">
			<li class="useless-list-item"></li>
		</ul>
		<input class="btn-primary" id="js-btn" type="button" >
	</article>
</section>
```

- __Class选择器__

> - 对于通用元素使用class，有利于渲染性能的优化；
> - 对于经常出现的组件，避免使用属性选择器，如：[class^="xxx"]。因为浏览器的性能会受到这些因素的影响；
> - 选择器尽可能短，并且尽量限制组成选择器的元素个数，建议不超过3；
> - 只有在必要的时候才将class限制在最近的父元素内。

－ __代码组织__

> - 以组件为单位组织代码；
> - 制定一致的注释规范；
> - 使用一致的空白符将代码分隔成块，这样有利于扫描较大的文档；
> - 如果使用多个css文件，将其按照组件而非页面的形式分拆，因为页面会被重组，而组件只会被移动。

ps: 上面的html规范主要是针对html5的规范来讲的。


以上是我看的关于规范的笔记，在接下来的工作里，我会按照这个规范去执行，当然，边执行边改善，参考更多的规范，让自己的代码写的更好些！













































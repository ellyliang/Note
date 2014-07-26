CSS如何实现无论Content高度多少footer都在底部
============================================

原理很简单，就是让Content的min-height为100%，然后footer的margin-top为负footer的高度。

废话不多说，贴代码，如下：

```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>footer</title>
    	<style>
    		* {
    			margin: 0;
    			padding: 0;
    		}
    		html,
    		body {
    			height: 100%;
    		}
    
    		.content {
    			min-height: 100%;
    			margin: 0 auto -40px; /* Note: 必须跟footer的高度值对应 */
    		}
    
    		.spacing {
    			height: 20px;
    		}
    
    		article {
    			height: 100px;
    			/*height: 900px;*/
    			background: red;
    		}
    
    		.footer {
    			height: 40px; /* Note: 必须跟content的下边距的负值对应 */
    			background: yellow;
    		}
    	</style>
    </head>
    <body>
    	<div class="content">
    		<div class="spacing"></div><!-- 通过这个div设置上边距 -->
    
    		<header></header>
    		<article>这是个简单的例子</article>
    
    		<div class="spacing"></div><!-- 通过这个div设置下边距 -->
    	</div>
    
    	<footer class="footer">这是footer</footer>
    </body>
  </html>
```

###笔记参考链接 ：

> * [http://www.cssstickyfooter.com/using-sticky-footer-code.html](http://www.cssstickyfooter.com/using-sticky-footer-code.html)
>* [http://ryanfait.com/resources/footer-stick-to-bottom-of-page/](http://ryanfait.com/resources/footer-stick-to-bottom-of-page/)



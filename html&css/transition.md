transition
==========

> * transition呈现的是一种过渡。PS：就是一种动画转换过程，如渐显、渐弱、动画快慢等。
> * transition可以和transform同时使用。
> * transition是复合属性。PS：如下：

###transition属性
> - transition-property [过渡css属性]
> - transition-duration[过渡时间]; PS：单位为s(秒) or ms(毫秒)
> - transition-delay[延迟时间]
> - transition-timing-function[过渡效果]

###transition-timing-function过渡的效果包括:

1、ease(逐渐变慢)
2、linear(均速)
3、ease-in(加速)
4、ease-out(减速)
5、cubic-bezier(该值允许你去自定义一个时间曲线)

###语法

```css
     transition-property: all | none | <property>[,<property>]*;
     //设置要以动画方式变换的css属性。
```

###取值
> all : 表示针对所有元素。
> none : 表示没有元素。
> ident : 指定css属性列表。

###笔记链接
[http://ecd.tencent.com/css3/guide.html?transform](http://ecd.tencent.com/css3/guide.html?transform)
[http://www.w3cplus.com/content/css3-transition](http://www.w3cplus.com/content/css3-transition)



















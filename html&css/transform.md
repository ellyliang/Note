tranform笔记
=======
> transform: none| <transform-function>[<transform-function>]*;
> transform属性能对元素对象进行变形操作;
> 主要包括：旋转（rotate）/缩放（scale）/移动（translate）/倾斜（skew）/矩阵变形（matrix）.

###取值

> - none：不进行变换；
> - <transform-function>:表示一个或多个变换函数，以空格分开，so可以同时对一个元素进行transform的多种属性操作。

> - 1.rotate(360deg) ---- 旋转
> - 2.translate(x, y) ---- 移动（水平方向，垂直方向）; PS: `translate(100px, 30px)`
> - translateX(x) ---- 仅水平方向移动
> - translateY(y) ---- 仅垂直方向移动
> - 3.scale(x, y) ---- 缩放（水平缩放，垂直缩放）PS：`scale(2, 1.5)`
> - 4.skew(x, y) ---- 扭曲（水平扭曲，垂直扭曲）PS：`skew(30deg, 10deg)`
> - 5.matrix(a, b, c, d, e, f)
> - 改变元素的基点`transform-origin`
     > 例子：
            > - `transform-origin: (left, top)`
            > - `transform-origin: right`
            > - `transform-origin(25%, 75%)`

###实例：

```css
 transform: rotate(90deg) scale(1.5, 0.8) translate(100px, 50px) skew(54deg, 45deg);
```

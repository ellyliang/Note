animation(动画)
========

> - animation-name[动画名称]
> - animation-duration[动画时间] PS:单位为s or ms；默认为0
> - animation-timing-function[播放方式] PS: ease(逐渐变慢)|linear（均速）|ease-in(加速)|ease-out(减速)|ease-in-out(加速然后减速)|step-start(马上转跳到动画结束的状态)|step-end(马上跳转到动画开始的状态)|cubic-bezier(自定义一个时间曲线)
> - animation-delay[开始播放时间]
> - animation-iteration-count[播放次数] PS：默认值为1; `n|infinite(无限)`
> - animation-direction[播放方向] PS： 默认`normal`->动画每次循环都是向前播放；reverse->动画反向运行，方向始终与normal相反；`alternate`->动画播放在第偶数次向前播放，第奇数次向反方向播放。
> - animation-fill-mode[播放后的状态]
> - animation-play-state[对象动画的装填] PS：默认running; paused

```css
    animation: 'ellyliang' 20s ease-in-out 2s infinite alternate
    animation: animation-name  animation-duration  animation-timing-function  animation-delay  animation-iteration-count animation-direction
```

###如何开始进行动画（@keyframes）

检索或设置对象所应用的动画名称，必须与规则@keyframes配合使用。

```css
    @-webkit-keyframes demo {
         from {
            left: 0;
         }
         to {
             left: 400px;
         }
     }

     复杂动画
     @-webkit-keyframes demo {
        0% {left: 0;}
        50%{left: 200px;}
        100%{left: 400px;}
     }
```

[http://ecd.tencent.com/css3/guide.html?transform](http://ecd.tencent.com/css3/guide.html?transform)

[http://www.w3cplus.com/content/css3-transition](http://www.w3cplus.com/content/css3-transition)

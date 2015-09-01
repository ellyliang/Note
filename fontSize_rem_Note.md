### REM

```css
  html {
    font-size: 62.5%; /* 10/16*100%=62.5% (10px)*/
    /*默认为16px, font-size:100%;*/
  }
  body {
    font-size: 1.4rem; /* 14px/10px=1.4rem */
  }
  h1 {
    font-size: 2.4rem;
  }
  
  /*  随着浏览器缩放字体 rem + mediaquery */
    /* iphone4 */
    @media (min-width:414px){
      html{
        font-size: 62.5%;
      }
    /* iphone6 */
    @media (min-width:340px) and (max-width: 413px){
      html{
        font-size: 55%;
      }
    }
    /* iphone5 */
    @media (max-width: 339px){
      html{
          font-size: 47.6%;
      }
    }
  
```

### js实现字体缩放
[请自行翻墙](http://jsbin.com/yipeqiseyi/1/edit?html,output)

### less实现字体缩放
[栗子](http://codepen.io/Dudy/pen/gpLgma)

```less
@charset "utf-8";
//此class类需添加在html元素上
.Dd-rem-responsive{
//  在此变量上设置默认的基准屏viewport的width
  @firstViewportWidth: 640px;

//  以320pxViewport的Width下的font size值为基准
  @defaultFontSize: 40px;

  @media screen and (width: @firstViewportWidth){
    font-size: @defaultFontSize;
  }

//  定义一个media 方法，通过媒体判断设置不同屏幕下的html的font size值
  .media(@viewportWidth,@firstViewportWidth:640px){
    @media (width: @viewportWidth) {
      font-size: @defaultFontSize / (@firstViewportWidth / @viewportWidth);
    }
  }

//  一般只用传一个参数，也就是需要改变字体大小的viewport的width
  .media(320px);
  .media(360px);
  .media(375px);
  .media(384px);
  .media(400px);
  .media(414px);
  .media(424px);
  .media(480px);
  .media(540px);
  .media(720px);
  .media(960px);
  .media(966px);
  .media(1024px);
  .media(1280px);

  >body{
//    实际项目中，这里body的font size大小应该和reset里定义的一致，可以通过一个变量让其保持同步
    font-size: initial;
  }
}

//@htmlDefaultFontSize的值为@defaultFontSize的值，单位为rem
.Dd-rem-responsive-comput-value(@sizeValue,@htmlDefaultFontSize:40rem){
  @Dd-rem-responsive-comput-value: @sizeValue / @htmlDefaultFontSize;
}

.rem-responsive-demo{
  margin-left: auto;
  margin-right: auto;

//使用者只需关注这个mixin方法

  // 传入需要的参数，左边的是元素对应的长度，无单位，值为元素单位为px时的长度大小。右边是html 640px宽度下的的font size，如果需拓宽元素宽度，可以传参数，否则不用传
  .Dd-rem-responsive-comput-value(640);
  // 此处将“.Dd-rem-responsive-comput-value”mixin方法进行调用，会返回相应的值
  width: @Dd-rem-responsive-comput-value;

//使用者只需关注这个mixin方法 END

  height: 200px;

  background-color: #cccccc;
}
```

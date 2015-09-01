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
@media screen and (width: 640px) {
  .Dd-rem-responsive {
    font-size: 40px;
  }
}
@media (width: 320px) {
  .Dd-rem-responsive {
    font-size: 20px;
  }
}
@media (width: 360px) {
  .Dd-rem-responsive {
    font-size: 22.5px;
  }
}
@media (width: 375px) {
  .Dd-rem-responsive {
    font-size: 23.4375px;
  }
}
@media (width: 384px) {
  .Dd-rem-responsive {
    font-size: 24px;
  }
}
@media (width: 400px) {
  .Dd-rem-responsive {
    font-size: 25px;
  }
}
@media (width: 414px) {
  .Dd-rem-responsive {
    font-size: 25.875px;
  }
}
@media (width: 424px) {
  .Dd-rem-responsive {
    font-size: 26.5px;
  }
}
@media (width: 480px) {
  .Dd-rem-responsive {
    font-size: 30px;
  }
}
@media (width: 540px) {
  .Dd-rem-responsive {
    font-size: 33.75px;
  }
}
@media (width: 720px) {
  .Dd-rem-responsive {
    font-size: 45px;
  }
}
@media (width: 960px) {
  .Dd-rem-responsive {
    font-size: 60px;
  }
}
@media (width: 966px) {
  .Dd-rem-responsive {
    font-size: 60.375px;
  }
}
@media (width: 1024px) {
  .Dd-rem-responsive {
    font-size: 64px;
  }
}
@media (width: 1280px) {
  .Dd-rem-responsive {
    font-size: 80px;
  }
}
.Dd-rem-responsive > body {
  font-size: initial;
}
.rem-responsive-demo {
  margin-left: auto;
  margin-right: auto;
  width: 16rem;
  height: 200px;
  background-color: #cccccc;
}
```

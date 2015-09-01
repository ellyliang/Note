### REM

```html
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
        font-size:8.8px;
      }
    }
    /* iphone5 */
    @media (max-width: 339px){
      html{
          font-size: 7.6px;
      }
    }
  
```

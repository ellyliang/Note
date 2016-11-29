### css

```css
  /**** 去掉默认的margin值 ****/
/* dt,  默认的margin和padding就为0*/
/*fieldset, 使用率不高*/
/*font,  默认里边没必要margin和padding为0*/
body,
form,
dl,
dd,
p,
h1,
h2,
h3,
h4,
h5,
h6{
    margin: 0;
}

/**** 增加IE9以下块级展示，待在IE上边确认 ****/
article,
aside,
footer,
header,
nav,
section {
  display: block;
}

/**** 将列表默认list style设置没没有 ****/
ul,
/*li,默认没有padding和margin值*/
ol {
    list-style: none;
    margin: 0;
    padding: 0;
}

/**** 全局定义字体大小、颜色和背景颜色 ****/
body {
    color: #393B3F;
    background-color: #F0F0F0;
    line-height: 1.15;
    -webkit-font-smoothing: antialiased;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

body,
input,
button,
select,
optgroup,
option,
textarea,
input[type="button"],
input[type="submit"],
input[type="reset"],
pre {
    font-family: "Microsoft Yahei", "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande", "Hiragino Sans GB", Tahoma, HELVETICA, Arial, sans-serif;
}

input,
textarea,
select,
button {
    margin: 0;
    color: #393B3F;
    line-height: 1.15;
}

input[disabled],
textarea[disabled] {
    color: #ADB9C1;
    cursor: not-allowed;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 1em;
    /*font-size: 16px;*/
}

/**** 设置iframe的背景色以及去除个别浏览器iframe底部的几个像素 ****/
iframe {
    background-color: #FFFFFF;
    vertical-align: middle;
}

/**** 移除文件链下划线，设置文字链各种状态的颜色 ****/
a {
    text-decoration: none;
    color: #52668C;
    background-color: transparent;  /*移除在IE10下点击超链接出现的背景。*/
    -webkit-tap-highlight-color: transparent;   /*设置的tap  A标签的时候出现的黑色高亮*/
}

a:active,
a:hover {
    outline-width: 0; /*** Remove the outline on focused links when they are also active or hovered in all browsers (opinionated).*/
}

a:hover {
    color: #285CCB;
}

a:active {
    color: #0954B8;
}

a:focus {
    color: #0954B8;
}

/**** 移除IE10以下图片的边框以及去除个别浏览器的几个像素 ****/
img {
  vertical-align: middle;
}

a img {
    border-style: none;
}

/**** 设置表格的默认样式 ****/
table {
    border-spacing: 0;
    border-collapse: collapse;
}

td,
th,
caption {
    padding: 0;
} /* 去除单元格以及caption表头的padding值 */

/* 样式公用不应该放reset里边
    caption {
        font-size: 14px;
        font-weight: bold;
        text-align: left;
    }

    caption p {
        font-weight: normal;
    }
 */

/**** 图片多余部分在IE 9/10/11下不隐藏的问题 需要在IE下边认证 ****/
svg:not(:root) {
  overflow: hidden;
}
```

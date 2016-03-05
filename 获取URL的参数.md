获取URL的参数笔记
=================

近期遇到挺多需求，需要获取URL上的参数进行判断之类的，所以写了这个笔记

```js
function getUrlParameter(name) {
  var pattern = RegExp(name + '=.[^;]*'),
      matched = window.location.href.(pattern);
  if(matched) {
    var parameter = matched[0].split('=');
    return parameter[1];
  }
  return '';
}
```

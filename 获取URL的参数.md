获取URL的参数笔记
=================

近期遇到挺多需求，需要获取URL上的参数进行判断之类的，所以写了这个笔记

```js
function getURLParameter(name) {
  var pattern = new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)'),
      matched = pattern.(exec(location.search) || [,""])[1].replace(/\+/g, '%20');
  return decodeURIComponent(matched) || null;
}
```

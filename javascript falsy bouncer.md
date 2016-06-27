Javascript falsy bouncer
=========================

- Falsy: false, null, undefined, NaN, 0, ''。

#### falsy bouncer

```js
  function bouncer(arr) {
    var holderArray = [];
    holderArray = arr.filter(removeFalseVal);
    return holderArray;
  }
  
  function removeFalseVal(value) {
    return Boolean(value);
  }
  
  bouncer([7, 'cate', '', false, 9, 0]);
```

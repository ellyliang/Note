jQuery的delegate()和bind()写法
==========================

尼玛，最近在写老代码的需求，用到了代理，但里边涉及多版本的jQuery问题。所以不能用ON和LIVE。
所以我用了bind，但是组里边的大牛建议我用delegate(delegate在1.4.2及以上版本中全兼容)。因为方便以后升级jQuery版本，结果问题来了。我不知道delegate和bind的写法，又懒的去查，
所以啊，惩罚自己，做个笔记！

### delegate()

```js
$(document).delegate('.xxx', 'click', function() {});
```

### bind()

```js
$(document).bind('click', '.xxx', function() {});
```

你应该知道的javascript 4种设计模式笔记
==================================

#### 1.模块设计模式(Module Design Pattern)

```js
(function() {
  // 声明私有变量、函数
  return {
    // 声明公有变量、函数
  }
})();
```

栗子：

```js
var HTMLChanger = (function() {
  var contents = 'contents';
  
  var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  };
  
  return {
    callChangeHTML : function() {
      changeHTML();
    },
  };
})();

HTMLChanger.callChangeHTML();
console.log(HTMLChanger.contents);
```

暴露模块模式

> 优点：代码更整洁
> 缺点：不能引用私有方法，不利于单元测试。将私有方法暴露为公有方法是不可重写的。

```js
var Exposer = (function() {
  var privateVariable = 10;
  
  var privateMethod = function() {
    console.log('inside a private method');
  };
  
  var methodToExpose = function() {
    console.log('this is a method i want to expose');
  };
  
  var otherMethodIWantToExpose = function() {
    privateMethod();
  };
  
  return {
    first : methodToExpose,
    second : otherMethodIWantToExpose
  };
})();

Exposer.first();
Exposer.second();
Exposer.methodToExpose;
```

[一天一个模式笔记！](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)





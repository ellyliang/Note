你应该知道的javascript 4种设计模式笔记
==================================

#### 1.模块设计模式(Module Design Pattern)

优点：

* 为代码提供特定的结构，有利于组织代码
* 用于创建独立解耦的代码片段工具

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

* 优点：代码更整洁
* 缺点：不能引用私有方法，不利于单元测试。将私有方法暴露为公有方法是不可重写的。

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

#### 2.原型设计模式(Prototype Design Pattern)

* 主要用于对象的复制。
* 优点：使用原型创建对象比直接new一个对象在性能要好很多。
* 适用场景：需要重复地创建相似对象

```js
var TeslModelS = function() {
  this.numWheels = 4;
  this.manufacturer = 'Tesla';
  this.make = 'ModelS';
};

TeslModelS.prototype.go = function() {
  console.log(this.numWheels);
};

TeslModelS.prototype.stop = function() {
  console.log(this.make);
};

var teslModelS = new TeslModelS();
teslModelS.go();
teslModelS.stop();
```

OR

```js
var TeslModelS = function() {
  this.numWheels = 4;
  this.manufacturer = 'Tesla';
  this.make = 'ModelS';
};

TeslModelS.prototype = {
  go : function() {
    console.log(this.numWheels);
  },
  stop : function() {
    console.log(this.make);
  }
};

var teslModelS = new TeslModelS();
teslModelS.go();
teslModelS.stop();
```

暴露原型模式

```js
var TeslaModelS = function() {
  this.numWheels = 4;
  this.manufacturer = 'Tesla';
  this.make = 'ModelS';
};

TeslaModelS.prototype = function() {
  var go = function() {
    console.log('go');
  };
  
  var stop = function() {
    console.log('stop');
  };
  
  return {
    pressBrakePedal: stop,
    pressGasPedal: go
  };
}();
```

####3.观察者设计模式(Observer Design Pattern)

* 优点：观察者和被观察者是抽象耦合的；建立一套触发机制。
* 缺点：大量的观察者增加，会很耗性能；
* 适用场景：有多个子类共有的方法，且逻辑相同；重要的、复杂的方法，可以考虑作为模板方法

```js
$scope.$on('nameChanged', function(event, args) {
  $scope.name = args.name;
}); 

$scope.userNameChanged = function(name) {
  $scope.$emit('nameChanged', {name: name});
};
```


[一天一个模式笔记！](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)





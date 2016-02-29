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

#### 4.订阅/发布模式(Publish/Subscribe)

```js
// 通用的发布者
var publisher = {
  subscribers : {
    any : []  // 事件类型：订阅者
  },
  
  // 将订阅者提供的调用方法添加到subscribers订阅的事件数组中
  subscribe : function(fn, type) {
    type = type || 'any';
    
    if(typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },
  
  // 删除订阅者
  unsubscribe : function(fn, type) {
    this.visitSubscribers('unsubscribe', fn, type);
  },
  
  // 循环遍历subscribers中每个元素，并调用他们所提供的方法
  publish : function(publication, type) {
    this.visitSubscribers('publish', publication, type);
  },
  
  // helper
  visitSubscribers : function(action, arg, type) {
    var pubtype = type || 'any',
        subscribers = this.subscribers[pubtype],
        i,
        max = subscribers.length;
        
    for(i=0; i<max; i+=1) {
      if(action === 'publish') {
        // 调用订阅者订阅该事件所提供的方法
        subscribers[i](arg);
      } else {
        // 找到当前订阅事件中提供的方法，并删除
        if(subscribers[i] === arg) {
          subscribers.splice(i, 1);
        }
      }
    }
  }
};

// 转化为通用发布者
function makePublisher(o) {
  var i;
  // 将通用发布者的方法复制到o对象中
  for(i in publisher) {
    if(publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
      o[i] = pushlisher[i];
    }
  }
  
  // 引用类型单独赋值
  o.subscribers = {
    any : []
  };
}

// 实现一个paper对象,所做的就是发布日刊和月刊
var paper = {
  daily: function() {
    this.pushlish('今天要发布一个新闻');
  },
  monthly: function() {
    this.publish('每月调查', 'monthly');
  }
};

// 将paper构造成一个发布者
makePublisher(paper);

// 订阅者1
function subscriberFunc1(arg) {
    console.log('又是一个订阅者2：' + arg);
}
// 订阅者2
function subscriberFunc2(arg) {
    console.log('又是一个订阅者3：' + arg);
}
// 订阅者1，2向paper订阅
paper.subscribe(subscriberFunc1, 'monthly');
paper.subscribe(subscriberFunc2);
```

[https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)

[http://jsfiddle.net/ganksolo/pm36H/](http://jsfiddle.net/ganksolo/pm36H/)





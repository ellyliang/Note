ES6 笔记
=========

#### constructor 代替ES5的构造函数

```js
//es5
var Elly = function(name, age) {
  this.name = name;
  this.age = age;
};

Elly.prototype.summary = function() {
  return this.name + ' ' + this.age;
};

// es6
class Elly {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  summary() {
    return this.name + ' ' + this.age;
  }
}
```

#### super 调用父类的构造函数

```js
class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  constructor(name, color) {
     // 此处应该是 super，题目中写错了。
     // 即调用父类的构造函数
     super(name);
     this.color = color;
  }

  speak() {
    // 调用父类的 speak 方法
    super.speak();
    console.log(this.name + ' roars.');
  }
}

var a = {
  val() {
    return this === super.valueOf();
  }
}

console.log(a.val()) // 返回 true
```

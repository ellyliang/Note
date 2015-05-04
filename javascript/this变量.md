###this变量

> - 函数运行时，自动生成的一个内部对象，只能在函数内部使用。
> - !important: this指的是调用函数的那个对象。

#### this调用的四种方法

> 普通函数调用（指向的是全局）

```js
 var x = 1;
 function test() {
  this.x = 0;  //this指向的是全局
 }
 test();
 console.log(x); //0
```

> 对象方法调用（this指这个上级对象）

```js
 function test() {
  console.log(this.x); //this指向的是obj对象方法
 }
 var obj = {};
 obj.x = 1;
 obj.m = test;
 console.log(obj.m()); //1
```

> 构造函数调用

```js
 var x = 2;
 function Test() {
  this.x = 1;
 }
 var test = new Test();
 console.log(test.x); //1
 console.log(x); //2
```

> apply函数调用(改变函数的调用对象)

apply(改变后的调用这个函数的对象) this指向的是第一个参数

```js
 var x = 0;
 function test() {
  console.log(this.x);
 }

 var obj = {};
 obj.x = 1;
 obj.m = test;

 obj.m.apply(); //apply为空的时候指向的是全局对象，x为0
 obj.m.apply(obj); //1
```

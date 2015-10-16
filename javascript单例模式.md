单例模式
========

###什么是单例模式？

  利用私有构造函数来保证只有一个实例，使不同的地方调用同一个实例对象。

###单例模式的例子：

```js
    var Useless = {
         name: "useless",
         age: function() {
           console.log("secret!");
         }
    };
    Useless.age();
```

###闭包实现私有成员的单例模式例子：

```js
	var Ellyliang = (function() {
		var name = "useLess",
		    age  = function() {
		    	console.log("secret!");
		    };

		return {
			getName: function() {
				return name;
			},
			getAge: function() {
				age();
			}
		}
	})();
	Ellyliang.getName();
	Ellyliang.getAge();
```

###闭包实现私有成员的惰性实例化单例模式:

```js
 	var Ellyliang = (function() {
		var name = "useLess",
			age = function() {
				console.log("secret!");
			};

		var obj = {
			getName: function(){
				return name;
			},
			getAge: function(){
				age();
			}
		};

		function init(){
			return obj;
		}

		return {
			getInstace: init
		};
	})();

	Ellyliang.getInstace().getAge();
	Ellyliang.getInstace().getAge();
```
NOTE: 适用场景－> 必须加载大量数据的单体知道需要使用它的时候才实例化。

###笔记链接：

> - [http://www.cnblogs.com/snandy/archive/2011/04/07/2007717.html](http://www.cnblogs.com/snandy/archive/2011/04/07/2007717.html)
> - [http://rolfzhang.com/articles/920.html](http://rolfzhang.com/articles/920.html)













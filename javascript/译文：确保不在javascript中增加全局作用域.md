译文：确保不在javascript中增加全局作用域
=================================

写javascript代码最好的做法是避免把对象放到全局作用域中。有几个很好的理由来解释全局增加耦合（globals add coupling），例如，分开不同库的时候，很容易破坏彼此。事实上，通常程序的规则是避免增加全局作用域。遗憾的是，javascript增加对象到全局作用域中是非常容易的事情。参考以下这段代码：

```js
 function sayHello(person) {
     message = "Hello, " + person;
     $("#message").text(message);
 }

 sayHello('@ardalis');
```

```html
 <div id="message" />
```

在这个例子中，我们定义了一个函数，在函数里边设置了一个变量，然后用jquery去修改一个div。但是因为我们没有声明`var`这个关键字，所以实际上我们已经增加了一个新的对象到全局作用中：message。事实上，如果其他的一些函数也存在message这个全局对象，那么我们刚声明的message就会覆盖掉其他一些函数的message，从而可能导致系统的其他部分被破坏，即使其他部分没有被修改过。增加紧密的耦合（tight coupling）在我们的设计中，很可能不经意间，会使我们写的应用更加脆弱，更难维护。

全局作用域很容易意外的导致错误，那么我们如何去避免它？当然有一些工具对找出javascript中的错误问题很有帮助,例如JSLint 。运行`sayHello()`函数，通过JSLint可以让你知道`message`在定义之前有没有被使用。

###全局数量
另一种方法是在全局空间中计算对象的数量，然后确保你没有增加同一个全局对象。这样做可以作为你测试套件每个函数的基础，声明每个函数开始和结束都没有改变全局状态的一部分（或是，如果函数想要增加到全局状态中，确保该函数中的对象是唯一你想要的）。关键是在指定的时间里能够计算多少个全局对象。你可以执行以下的代码：

```js
function sayHello(person)
{
    message = "Hello, " + person;
    $("#message").text(message);
}

function sayHelloShouldNotAddToGlobalScope(globalObject)
{
    var initialGlobalCount = Object.keys(globalObject).length;
    sayHello("@ardalis");
    var endGlobalCount = Object.keys(globalObject).length;
    if(initialGlobalCount == endGlobalCount) {
        $("#result").text("Success!");
    } else {
        $("#result").text("Failed - Initial Count: " + 
                             initialGlobalCount + 
                              " End Count: " +
                             endGlobalCount);
    }
}

$(document).ready(function() {
    // run test
    sayHelloShouldNotAddToGlobalScope(window);    
});
```

```html
<p id="message" />
<p id="result" />
```

运行这个函数，你应该可以看到，该函数在全局作用域的结束比开始多了个项目（确切的数字会在不同的环境中运行该函数）。

###使用严格模式
另一个方法是声明`"use strict;"`模式。它的做法很简单，无论是本地或是全局，在你的代码中增加这个`"use strict"`这个字符串，其次是个分号。像这样：

```js
"use strict";
```

这样做除了其他事项外，还可以防止使用未声明的变量，未声明的变量是上面所以提及的sayHello()函数问题的根源。Chrome 13+, IE 10+, Safari 5.1+, 和Firefox 4+都兼容严格模式。如果你添加严格模式到上面的代码中（请看[fiddle](http://jsfiddle.net/7Rx32/4/)）,当你运行代码的时候，你会发现有个错误（请查阅开发者工具的console）:

![说明](image_3.png)

###总结
大多数现代浏览器都支持"use strict"，所以使用严格模式可以养成良好的习惯。严格模式会阻止常见的问题，像不小心将对象添加到全局作用域中。你也可以在全局对象之前和执行方法之后检查对象的数量，最好是在你的javascript单元测试中检查对象的数量。






















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


















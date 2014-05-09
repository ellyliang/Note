//声明：此笔记的原文来自http://www.basecss.net/article/immediately-invoked-function-expression.html

//在JS中，每个函数被调用时都会创建一个全新的上下文环境。
//在函数内部定义的变量和函数就只能在函数内部访问，在外部无法访问
//那么在该上下文环境中，调用函数就提供了一个非常方便的方式来创建私有成员

	//因为返回函数能够访问外部函数的内部变量的私有变量i，返回函数实际上有访问私有变量的特权
	function makeCounter(){
		//私有变量
		var i = 0;

		//返回函数
		return{
			console.log(i++);
		};
	}

	var counter = makeCounter();
	counter(); //1
	counter(); //2

	var counter2 = makeCounter();
	counter2(); //1
	counter2(); //2

	i; //引用错误，因为i是私有变量


	var foo = function(){}

	function(){}(); //语法错误

	//但是如果在括号中插入一个表达式，就不会异常，但是函数还是不会执行
	function foo(){}(1);

	//这其实相当于一个函数声明后面跟一个完全无关的表达式
	function foo(){}
	(1);

	//解决上面的问题，最好的方法是是有即时函数表达式
	(function(){}());

	//括号和强制运算符的作用是消除函数表达式和函数声明之间的歧义
	var i = function foo(){}();
	true && function(){}();
	0,function(){}();

	//使用闭包保存状态

	//当点击元素时（循环执行完成后），它会弹出元素总数，因为i实际上是循环执行后完成的值。
	var elems = document.getElementsByTagName('a');

	for(var i = 0; i < elems.length; i++){
		elems[i].addEventListener('click',function(e){ //addEventListener(); 监听事件
			e.preventDefault();  //preventDefault();取消事件的默认动作
			alert('I am link #' + lockedInIndex)
		},'false');
	}

	//立即调用函数表达式内部的lockedLindex总是在函数表达式被调用时传递给它i的值
	//因此当点击元素时，会正确的弹出当前的值。
	var elems = document.getElementsByTagName('a');

	for(var i = 0; i < elems.length; i++){
		(function(lockedInIndex){
			elems[i].addEventListener('click',function(e){
				e.preventDefault();
				alert('I am link #' + lockedInIndex);
			},false);
		}(i));
	}

	//以上的例子还可以这样
	var elems = document.getElementsByTagName('a');

	for(var i = 0; i < elems.length; i++){
		elems[i].addEventListener('click',(function(lockedInIndex){
			return function(e){
				e.preventDefault();
				alert('I am link #' + lockedInIndex);
			}
		}(i),'false'););
	}

//即时函数模块模式
	//即时函数可以赋给一个变量，当调用匿名函数时立即执行
	var counter = (function(){
		//私有变量
		var i = 0;

		//闭包
		return{  //特权
			get:function(){
				return i;
			},
			set:function(val){
				return i = val;
			},
			increment:function(){
				return ++i;
			}
		};
	}());

	//实现
	counter.get(); //0
	counter.set(5); //5
	counter.increment(); //6
	counter.increment(); //7

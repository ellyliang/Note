最近搞react-native环境遇到的问题
================================

前奏完成后，通过`react-native init Hello`,然后启动xcode,打开项目。本应该很兴奋看到页面，结果尼玛，报错了，以下是我遇到的2个问题的笔记

#### 第一个问题。如图

![reactNativeError01](/reactNativeError01.png)

将`../Hello/ios/Hello/AppDelegate.m`中的`  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];`改成机器的地址

![reactNativeError02](/reactNativeError02.jpeg)


将`/Hello/node_modules/react-native/node_modules/react-transform-hmr/node_modules/react-proxy/node_modules/react-deep-force-update/.babelrc`删除掉

就这么愉快解决了！


如何跑通react native(iOS)
====================

> 下载的时候，请保持翻墙状态，不然可能会出现其他的问题。

> 请确认本机是否已经安装了node

#### 1.更新homebrew(如还未安装homebrew, [请戳](http://brew.sh/))

```js
  brew update
  brew upgrade
```

#### 2.homebrew安装nvm, watchman, flow

brew安装nvm或是通过[安装指南](https://github.com/creationix/nvm#installation)

> 注意：要想react native跑通，且不会出现很多问题，一定要将node升级到4.0

```js
  brew install nvm && 
  nvm --version // 查看是否安装成功
  // 遇到问题请看下边说明
  // 如果安装成功，执行下边的命令
  nvm install node
  nvm alias default node
  nvm ls-remote // 查看node的版本
```

说明：中间我遇到了一个问题，无论我怎么装，都会提示这个`nvm command not found`，于是我Google找到了解决方法，链接如下：

[Node Version Manager install - nvm command not found](http://stackoverflow.com/questions/16904658/node-version-manager-install-nvm-command-not-found/17707224#17707224)

brew安装watchman,flow

```js
  brew install watchman
  brew install flow
```

#### 3.安装[Xcode]()7.1或更高版本（这个不做说明，因为我也不熟，刚开始接触，只要下载安装就好）

这是我查找的参考链接

[【整理】Xcode中的iOS模拟器(iOS Simulator)的介绍和使用心得](http://www.crifan.com/intro_ios_simulator_in_xcode_and_usage_summary/)

#### 4.最后一步，下载react native提供的demo(AwesomeProject)

执行以下链接：

```js
  npm install -g react-native-cli
  react-native init AwesomeProject
  cd AwesomeProject/
```

进入到AwesomeProject/，然后找到ios/AwesomeProject.xcodeproj，双击打开启动。

如果没报啥权限问题的话估计是成功了，但是我遇到了啥permission，或是unlock的问题，具体的提示忘记了。

解决方法：

[http://stackoverflow.com/questions/20182676/unlock-xcode-files](http://stackoverflow.com/questions/20182676/unlock-xcode-files)

注意：解决步骤，

* 右键ios/AwesomeProject.xcodeproj，显示简介 -> 开锁 -> 点击‘+’ -> 选择自己的账号(登录的用户，就是你平时要输入密码的那个账户) -> 改成‘读与写’状态；

* 然后返回到AwesomeProject， 显示简介 -> 开锁 -> 点击‘+’ -> 选择自己的账号(登录的用户，就是你平时要输入密码的那个账户) -> 改成‘读与写’状态 -> 点击齿轮icon，选择‘应用到包含的项目..’；
一定要按这个顺序

好了，我的笔记完毕，当然，在配react native开发环境的时候遇到了很多问题，有点模糊，但是，升级了iOS系统之后，突然有些东西都没了，然后我就按里边的步骤去执行，保证node升级到了4.0，之后就遇到的问题少了，这2个问题是我印象比较深刻的。遇到问题的时候，一定要看清楚问题，然后google下，就会解决的。我那么笨都可以，你更可以的！

#### 目前学习的资料

[react native中文](http://wiki.jikexueyuan.com/project/react-native/GettingStarted.html)

[深入浅出react native](http://zhuanlan.zhihu.com/FrontendMagazine/19996445)

[javascript es6入门](http://es6.ruanyifeng.com/#docs/object)

当然，我学习这些的时候，一定不能把基础漏掉，我要进行之前的计划，学习underscore源码，学习Javascript基础！自己加油！！！





# React
React的学习笔记

##React简介
### react是什么?
 React 用于构建用户界面的JS库.是一个将数据渲染为HTML视图的开源JS库

### 为什么学？
1、原生JS操作DOM繁杂，效率低(DOM-API操作UI);
2、使用JS直接操作DOM,浏览器会进行大量的重绘重排
3、原生JS没有组件化编码方案，代码复用低

### React的特点
1.采用组件化模式，声明式编码，提高开发效率及组件复用率
2.在React Native中可以使用React语法进行移动端开发
3.使用虚拟DOM＋优秀的Diffing算法，尽量减少与真实DOM的交互

## React入门
React基础案例
1.先引入三个包
【先引入react.development.js，后引入react-dom.development.js】

```
react.development.js
react-dom.development.js
babel.min.js

```
2.创建一个容器

3.创建虚拟DOM，渲染到容器中
```
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>hello_react</title>
  </head>
  <body>
    <!-- 准备好一个"容器" -->
    <div id="test"></div>
    <!-- 引入react核心库 -->
    <script type="text/javascript" src="../js/react.development.js"></script>
    <!-- 引入react-dom,用于支持react操作DOM -->
    <script type="text/javascript" src="../js/react-dom.development.js"></script>
    <!-- 引入babel,用于将jsx转为js -->
    <script type="text/javascript" src="../js/babel.min.js"></script>
    
    <script type="text/babel">  //此处一定要写babel
    //1.创建虚拟DOM
    const VDOM =  <h1> hello,React</h1>  //这里是JSX语法，不需要加引号
    //2.渲染虚拟DOM到页面，如果有多个渲染同一个容器，后面的会将前面的覆盖掉
    ReactDOM.render(VDOM,document.getElementById('test'))
    </script>
  </body>
</html>
```
这样，就会在页面中的这个div容器上添加这个H1

### JSX基础语法


### 两种创建虚拟DOM的方式
1.使用JSX创建虚拟DOM
```
 //1.创建虚拟DOM
  const VDOM = (//这里是JSX语法，不需要加引号
    <h1 id="title"> 
      <span>Hello,React</span>
    </h1>
  )
  //2.渲染虚拟DOM到页面
  ReactDOM.render(VDOM,document.getElementById('test'))
```
2.使用JS创建虚拟DOM
```
//1.创建虚拟DOM[在这使用了js的语法]React.createElement(标签,标签属性,内容)
//1.创建虚拟DOM
  const VDOM = React.createElement('h1',{id:'title'},React.createElement('span',{},'Hello,React'));
  //2.渲染虚拟DOM到页面
  ReactDOM.render(VDOM,document.getElementById('test'))

```
使用JS和JSX都可以创建虚拟DOM，但是可以看出JS创建虚拟DOM比较繁琐，尤其是标签很多的情况下，所以还是比较推荐使用JSX来创建











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


### JSX基础语法
1.定义虚拟DOM时，不要写引号

2.标签中混入JS表达式时要用{}
```.
const myId = 'aTguiGu'
const myData = 'Hello,rEaCt'
const VDOM_1 = (
  <h2 id = {myId.toLowerCase()}>
    <span>{myData.toLowerCase()}</span>
  </h2>
)
//2.渲染虚拟DOM到页面
ReactDOM.render(VDOM_1,document.getElementById('test'))
```
3.样式的类名指定不要用class,要用className
4.内联样式，要用style= {{key:value}}的形式去写
```
const VDOM_1 = (
  <h2 className="title" id = {myId.toLowerCase()}>
    <span style={{color:'white',fontSize:'29px'}}>{myData.toLowerCase()}</span>
  </h2>
)
```
5.只用一个根标签
6.标签必须闭合
7.标签首字母
（1）.若小写字母开头，则将改标签转为html中的同名元素，若html中无该标签对应的同名元素。则报错
（2）.若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错

### 模块
1）理解：向外提供就特定功能的js程序，一般就是一个js文件
2)为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂
3）作用：复用js,简化js的编写，提高js运行效率

### 组件
1）理解：用来实现局部功能效果的代码和资源的集合（html/css/js/image等）
2）为什么：一个界面的功能更复杂
3）作用：复用编程，简化项目编程，提高运行运行效率

### 模块化
当应用js都以模块来编写的，这个应用就是一个模块化的应用

### 组件化
当应用是以多组件的方式实现，这个应用就是一个组件化的应用
（使组件复用）


### 函数式组件

```
//1.先创建函数，函数可以有参数，也可以没有，但是必须要有返回值，返回一个虚拟DOM
 //1.创建函数式组件
   function MyComponent() {
    return <h2>我是用函数定义的组件(适用于【简单组件】的定义）</h2>
   }

   //2.渲染组件到页面
   ReactDOM.render(<MyComponent />,document.getElementById('test'))
```

### Class组件
```
//1.创建类式组件
   class MyComponent extends React.Component {
		render(){
			//render是放在哪里的？ ---MyComponent的原型对象上，供实例使用
			//render中的this是谁，---MyComponent的实例对象《=>MyComponent组件实例对象
			console.log('render中的this:', this);
			return <h2>我是用类定义的组件(适用于【复杂组件】的定义)</h2>
		}
	 }
	 //渲染组件到页面
	 ReactDOM.render(<MyComponent />,document.getElementById('test'))
	 //执行了ReactDOm.render(<MyComponent />....之后，发生了什么)？
  //1.React解析组件标签，找到了MyComponent组件
  //2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的reader方法
	//将render返回的虚拟DOM转为真实DOM,随后呈现在页面上
```

## 组件实例的三大属性
### state

案例：
1：需求：页面显示【今天天气很炎热】，鼠标点击文字的时候，页面更改为【今天天气很凉爽】
```
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>state</title>
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
  //1.创建组件
  class Weather extends React.Component{
    //构造器调用了几次？ ——— 1次
    constructor(props){
      console.log('constructor')
      super(props)
      //初始化状态
      this.state = {isHot:false,wind:'微风'}
      //解决changeWeather中this指向问题
      //找到原型的changeWeather，根据changeWeather函数创建了changeWeather1的函数，并且将实例对像的this赋值过去
      this.changeWeather1 = this.changeWeather.bind(this);
    }
    //render调用几次？ ——— 1+n次 1是初始化的那次,n是状态更新的次数
    render(){ //点几次调几次
      console.log('render')
      console.log(this);
      const {isHot,wind} = this.state
      //如果加changeWeather(),就是将函数的回调值放入这个地方
      //this.changeWeather这里面加入this,并不是调用，只不过是找到了changeWeather这个函数，在调用的时候相当于直接调用，并不是实例对象的调用
      return <h1 onClick={this.changeWeather1}>今天天气很{isHot ? '炎热' : '凉爽'},{wind}</h1>
    }
    //自定义方法
    changeWeather(){
      //changeWeather 放在哪里？ -----Weather的原型对象上，供实例使用
      //changeWeather是作为onCick的回调，所以不是通过实例调用的，是直接调用
      //类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined
      
      //获取原来的isHot值
      const isHot = this.state.isHot
      //严重注意：状态必须通过setState进行更新，且更新是一种合并，不是替换
      this.setState({isHot:!isHot})
      //严重注意,状态(state)不可直接更改，下面这行就是直接更改
      // this.state.isHot = !isHot   //这是错误的写法
    }
  }
  //2.渲染组件到页面
  ReactDOM.render(<Weather />,document.getElementById('test'))
  //react 如何绑定事件

  </script>


</body>
</html>
```
需要注意的是：
1.组件的构造函数，必须传递一个props参数
2.特别关注this[重点]，类中所有的方法局部都开启了严格模式，如果直接进行调用，this就是undefined
3.想要改变state，需要使用setState进行修改，如果只是修改state的部分属性，则不会影响其他的属性，这个只是合并并不是覆盖
this.setState(),该方法接收两种参数：对象或函数
4.组件中的render方法中的this为组件实例对象
5.组件自定义的方法中this为undefined,如何解决？
a.强制绑定this:通过函数对象的bind()
b.箭头函数

 
简化版本
```
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>state</title>
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
  //1.创建组件
  class Weather extends React.Component{

    //初始化状态
    state = {isHot:false,wind:'微风'}

    render(){ 
      const {isHot,wind} = this.state
      return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'},{wind}</h1>
    }

    //自定义方法 ———— 要用赋值语句的形式 + 箭头函数
    changeWeather = () =>{
      const isHot = this.state.isHot
      this.setState({isHot:!isHot})
    }
  }
  //2.渲染组件到页面
  ReactDOM.render(<Weather />,document.getElementById('test'))

  </script>


</body>
</html>
```

### Props
Props主要用来传递数据，比如组件之间进行传值
```
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>props</title>
</head>
<body>
  <!-- 准备好一个"容器" -->
  <div id="test1"></div>
  <div id="test2"></div>
  <div id="test3"></div>
  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react-dom,用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel,用于将jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>
  <!-- 引入prop-types,用于对组件标签属性进行限制 -->
  <script type="text/javascript" src="../js/prop-types.js"></script>
  
  <script type="text/babel">  //此处一定要写babel
  //1.创建组件
  class Person extends React.Component {
    //构造器是否接收props,是否传递给super,取决于：是否希望在构造器中通过this访问props
    constructor(props){
      console.log(props);
      super(props)

    }
    static proTypes = {
      name:PropTypes.string.isRequired,
      sex:PropTypes.string,
      age:PropTypes.number,
      // speak:PropTypes.func
    }
  //指定默认标签属性值
    static defaultProps = {
      sex:'男',
      age:18
    }
  
    render(){
      const {name,age,sex} = this.props
      //props是只读的
      //this.props.name='jack' //此行代码会报错，因为props是只读的
      return (
        <ul>
          <li>姓名:{name}</li>
          <li>性别:{sex}</li>
          <li>年龄:{age+1}</li>
        </ul>
      )
    }
  }
  //对标签属性进行类型、必要性的限制
 
  //渲染组件到页面
  ReactDOM.render(<Person name="jerry" />,document.getElementById('test1'))

  </script>


</body>
</html>
```

### 函数式组件的使用
```
function Person (props) {
    const {name,sex,age}  = props
    return (
        <ul>
          <li>姓名:{name}</li>
          <li>性别:{sex}</li>
          <li>年龄:{age+1}</li>
        </ul>
      )
  }

  Person.proTypes = {
      name:PropTypes.string.isRequired,
      sex:PropTypes.string,
      age:PropTypes.number,
      // speak:PropTypes.func
    }
  //指定默认标签属性值
  Person.defaultProps = {
    sex:'男',
    age:18
  }


  //渲染组件到页面
  ReactDOM.render(<Person name="jerry" />,document.getElementById('test1'))
```

### refs
组件内的标签可以定义refs属性来标记自己

Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。

Refs主要提供了三种方式：
1.字符串形式（已废弃）
2.回调形式
3.createRef
回调形式会在ref属性中添加一个回调函数。将该DOM作为参数传递过去。

如：ref里面就是一个回调函数，c就是该input标签。然后在将该DOM元素赋值给实例对象中的一个属性

```
 <input ref={c => this.input1 =c} type="text" placeholer="点击按钮提示数据" />

```
3.
```
<script type="text/babel">  //此处一定要写babel
  //1.创建组件
  class Demo extends React.Component {

    /*
       React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点
       该容器是专人专用的
    */

    myRef = React.createRef()
    myRef2 = React.createRef()
    
    //展示左侧输入框的数据
    showData = () =>{
      alert(this.myRef.current.value);
    }
    showData2 = () => {
      alert(this.myRef2.current.value);
    }
    
    render() {
      return (
        <div>
          <input ref={this.myRef} type="text" placeholer="点击按钮提示数据" />
          <button  onClick={this.showData}>点我提示左侧的数据</button>
          <input onBlur={this.showData2} ref={this.myRef2} type="text" placeholer="失去焦点提示数据" />
        </div>
      )
    }
  }

  //渲染组件到yemian
  ReactDOM.render(<Demo/>,document.getElementById('test'))

  </script>
```

 ## React事件

 React的事件是通过onXxx属性指定事件处理函数

​ React使用的都是自定义的时间，而不是原生的事件

​ React中的事件是通过事件委托方式处理的

​ 事件中必须返回的是函数

​ 通过event.target得到发生事件的Dom元素对象

比如：

先声明一个事件，然后在根据事件创建相应的函数，根据事件的event参数，将DOM元素获取到。

```
<input onChange={this.saveName} type = "text" name ="username"/>

saveName = (event) =>{
  this.setState({name:event.target.value});
}
```

### 受控和非受控组件

先来说说受控组件：

使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

```
<script type="text/babel">  //此处一定要写babel
  //1.创建组件
  class Login extends React.Component {

    //初始化状态
    state = {
      username: '', //用户名
      password:'' //密码
    }
    //保存用户名到状态中
    saveUsername = (event) => {
      this.setState({username:event.target.value})
    }
    //保存密码到状态中
    savePassword = (event) => {
      this.setState({password:event.target.value})
    }

     //表单提交的回调
    handleSubmit = (event) => {
      event.preventDefault() //阻止表单提交
      const {username,password} = this.state
      alert(`你输入的用户名是${username},你输入的密码是:${password}`)
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          用户名:<input onChange={this.saveUsername} type="text" name="username"/>
          密码：<input onChange={this.savePassword} type="password" name="password"/>
          <button>登录</button>
        </form>
      )
    }
  }
  //渲染组件
  ReactDOM.render(<Login/>,document.getElementById('test'))


  </script>
```
非受控组件：

非受控组件其实就是表单元素的值不会更新state。输入数据都是现用现取的。

如下：下面并没有使用state来控制属性，使用的是事件来控制表单的属性值。

```
<script type="text/babel">  //此处一定要写babel
  //1.创建组件
  class Login extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault() //阻止表单提交
      const {username,password} = this
      alert(`你输入的用户名是：${username.value},你输入的密码是${password.value}`)
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          用户名:<input ref={c => this.username = c} type="text" name="username"/>
          密码：<input ref = {c=>this.password = c} type="password" name="password"/>
          <button>登录</button>
        </form>
      )
    }
  }
  //渲染组件
  ReactDOM.render(<Login/>,document.getElementById('test'))

  </script>
```

### 高阶函数

1.如果函数的参数是函数
2.如果函数返回一个函数

函数的柯里化

通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式

如下，我们将上面的案例简化，创建高阶函数：

```
 <script type="text/babel">  //此处一定要写babel

  /*
   高阶函数：如果一个函数符合下面2个规范的任何一个，那该函数就是高阶函数
   1.若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数
   2.若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数
   常见的高阶函数有：Promise、setTimeout、arr.map()
   函数的柯里化:通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式
  */


  //1.创建组件
  class Login extends React.Component {

    //初始化状态
    state = {
      username: '', //用户名
      password:'' //密码
    }
    //保存表单数据到状态中
    saveFormDate = (dataType) => {
      console.log(dataType,'oo')
      // this.setState({username:event.target.value})
      //onChange的返回值
      return (event) => {
        this.setState({[dataType]:event.target.value})
      }
    }
     //表单提交的回调
    handleSubmit = (event) => {
      event.preventDefault() //阻止表单提交
      const {username,password} = this.state
      alert(`你输入的用户名是${username},你输入的密码是:${password}`)
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          用户名:<input onChange={this.saveFormDate('username')} type="text" name="username"/>
          密码：<input onChange={this.saveFormDate('password')} type="password" name="password"/>
          <button>登录</button>
        </form>
      )
    }
  }
  //渲染组件
  ReactDOM.render(<Login/>,document.getElementById('test'))


  </script>
```

## 生命周期(旧)
[![旧生命周期]](https://github.com/rainyGLC/React/blob/main/react_basic/02_%E5%8E%9F%E7%90%86%E5%9B%BE/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F(%E6%97%A7).png)



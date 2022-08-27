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
(如果想传参就需要用高阶函数或箭头函数)
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
![旧生命周期](https://raw.githubusercontent.com/rainyGLC/React/main/react_basic/02_%E5%8E%9F%E7%90%86%E5%9B%BE/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F(%E6%97%A7).png)

生命周期的三个阶段（旧）
	1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
      1.	constructor()
      2.	componentWillMount()
      3.	render()   =====>必须
      4.	componentDidMount() ====>常用
      （一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息

	2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
      1.	shouldComponentUpdate()
      2.	componentWillUpdate()
      3.	render()
      4.	componentDidUpdate()
	3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
      1.	componentWillUnmount()
      (一般在这个钩子中做一些shouwei3的事，例如：关闭定时器、取消订阅信息)

```
 <script type="text/babel">  //此处一定要写babel

  //1.创建组件
  //生命周期回调函数 <=> 生命周期钩子函数 <=> 生命周期函数 <=> 生命周期钩子
  class Life extends React.Component {
    state = {opacity:1}
    death = () => {
    //  //清除定时器
    //  clearInterval(this.timer)
      //卸载组件
      ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    }
    //组件挂完毕
    componentDidMount(){
      console.log('@')
      this.timer = setInterval(() => {
        //获取原状态
        let {opacity} = this.state
        //减少0.1
        opacity -= 0.1
        if(opacity <= 0)  opacity = 1
        //设置新的透明度
        this.setState({opacity})
      },200)
    }

    //组件将要卸载
    componentWillUnmount(){
        //清除定时器
      clearInterval(this.timer)
    }


生命周期（新）

```
  <script type="text/babel">  //此处一定要写babel

  //1.创建组件
  class Count extends React.Component{
    
    //构造器
    constructor(props) {
      console.log('Count-constructor')
      super(props)
      //初始化状态
      this.state = {count:0}

    }

    //加1按扭加1
    add = () =>{
      //获取原状态
      const {count} = this.state
      //更新状态
      this.setState({count:count +1})
    }
    //卸载组件按钮回调
    death = () => {
      ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    }

    //强制更新按钮的回调
    force = () => {
      this.forceUpdate()
    }


    
    //组件将要挂载的钩子
    UNSAFE_componentWillMount(){
      console.log('Count-componentWillMount')
    }

    //组件挂载完毕的钩子
    componentDidMount(){
      console.log('Count-componentDidMount')
    }

    //组件将要卸载的钩子
    componentWillUnmount(){
      console.log('Count-compontWillUnmount')
    }
    //控制组件更新的"阀门"
    shouldComponentUpdate(){
      console.log('Count-shouldComponentUpdate')
      return true
    }
    //组件将要更新
    UNSAFE_componentWillUpdate(){
      console.log('Count-componentWillUpdate')
    }
     //组件更新完毕的钩子
    componentDidUpdate(){
      console.log('Count-componentDidUpdate')
    }

    render() {
      console.log('Count-render')
      const {count} = this.state
      return (
        <div>
          <h2>当前求和为:{count}</h2>
          <button onClick={this.add}>点我+1</button>
          <button onClick={this.death}>卸载组件</button>
          <button onClick={this.force}>不更改任何状态中的数据，强制更新一下</button>
        </div>
      )
    }
  }
  
  //父组件A
  class A extends React.Component {
    //初始化状态
    state = {carName:'奔驰'}
    changeCar = () => {
      this.setState({carName:'奥拓'})
    }
    render () {
      return (
        <div>
          <div>我是A组件</div>
          <button onClick={this.changeCar}>换车</button>
          <B carName={this.state.carName}/>
        </div>
      )
    }
  }

  //子组件B
  class B extends React.Component{
    //第一次不算，组件将要接收新的props的钩子
    UNSAFE_componentWillReceiveProps() {
      console.log('B---componentWillReceiveProps')
    }
    render () {
      console.log('B---render')
      return (
        <div>我是B组件，接收到的车是：{this.props.carName}</div>
      )
    }
  }
  //渲染组件
   ReactDOM.render(<Count />,document.getElementById('test'))
  </script>
```


即将废弃的勾子
1.	componentWillMount
2.	componentWillReceiveProps
3.	componentWillUpdate
现在使用会出现警告，下一个大版本需要加上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用。

![生命周期(新)](https://raw.githubusercontent.com/rainyGLC/React/main/react_basic/02_%E5%8E%9F%E7%90%86%E5%9B%BE/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F(%E6%96%B0).png)


生命周期的三个阶段（新）
1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
    1.	constructor()
    2.	getDerivedStateFromProps 
    3.	render()
    4.	componentDidMount()
	2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
    1.	getDerivedStateFromProps
    2.	shouldComponentUpdate()
    3.	render()
    4.	getSnapshotBeforeUpdate
    5.	componentDidUpdate()
	3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
    1.	componentWillUnmount()

### 重要的钩子
1.render:初始化渲染或更新渲染调用
2.componentDidMount:开启监听，发送ajax请求
3.compontWillUnmount：做一些收尾的工作，如；清理定时器

## React脚手架
react提供了一个用于创建react项目的脚手架库：create-react-app

### 创建项目并启动
1.全局安装： npm i -g create-react-app
2.创建项目： create-react-app hello-react
3.进入项目文件夹：cd hello-react
4.启动项目：npm start

## react脚手架项目结构

public ---- 静态资源文件夹
		favicon.icon ------ 网站页签图标
		index.html -------- 主页面
		logo192.png ------- logo图
		logo512.png ------- logo图
		manifest.json ----- 应用加壳的配置文件(一些手机壳加壳的配合文件或者图片)
		robots.txt -------- 爬虫协议文件
src ---- 源码文件夹
		App.css -------- App组件的样式
		App.js --------- App组件
		App.test.js ---- 用于给App做测试
		index.css ------ 样式
		index.js ------- 入口文件
		logo.svg ------- logo图
		reportWebVitals.js
			--- 页面性能分析文件(需要web-vitals库的支持)
		setupTests.js
		---- 组件单元测试的文件(需要jest-dom库的支持)



  出现问题：React启动时报Plugin “react“ was conflicted between “package.json ......错误的解决办法。
  解决方法：首先打开你的package.json文件并通过ctrl + S保存并再次运行后得到解决。

  ### 第一个脚手架应用
  1.我们保持public中的index.html 不变
  2.修改src下面的App.js以及indx.js文件

  App.js：【注意：创建好的组件一定要暴露出去】
  
  ```
  //创建“外壳”组件App
  import React,{Component} from "react";
  import Hello from "./components/Hello";
  import Welcome from "./components/Welcome";

  //创建并暴露App组件
  export default class App extends Component{
    render(){
      return(
        <div>
          <Hello/>
          <Welcome/>
        </div>
      )
    }
  }
 ```

 index.js :【主要的作用其实就是将App这个组件渲染页面上】
 ```
  //引入react核心库
  import React from "react";
  //引用ReactDOM
  // import ReactDOM  from 'react-dom'
  import ReactDOM from 'react-dom/client';
  //引入App组件
  import App from './App'

  //渲染App到页面
  // ReactDOM.render(<App/>,document.getElementById('root'))

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // <React.StrictMode>
      <App />
    // </React.StrictMode>
  );

 ```
由于普通的Js和组件都是js，所一最好组件使用jsx去展示

### 样式冲突
当组件逐渐增多起来的时候，我们发现，组件的样式也是越来越丰富，这样就很有可能产生两个组件中样式名称有可能会冲突，这样会根据引入App这个组件的先后顺序，后面的会覆盖前面的，

为了避免这样的样式冲突，我们采用下面的形式：

1.将css文件名修改： hello.css --- >hello.module.css

2.引入并使用的时候改变方式：
```
  import React,{Component} from "react";
  import hello from './index.module.css'

  export default class Hello extends Component{
    render(){
      return <h2 className={hello.title}>Hello,React</h2>
    }
  }
```

## 功能界面的组件化编码流程
1.拆分组件:拆分界面，抽取组件

2.实现静态组件

3.实现动态组件
  动态的显示初始化数据
  数据类型
  数据名称

保存在哪个组件
 交互(从绑定事件监听开始)


注意事项：

1.拆分组件、实现静态组件。注意className、style的写法

2.动态初始化列表，如何确定将数据放在哪个组件的state中？

某个组件使用：放在自身的state中
某些组件使用：放在他们共同的父组件中【状态提升】
3.关于父子组件之间的通信

```
App.js
//创建“外壳”组件App
import React,{Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'



//创建并暴露App组件
export default class App extends Component{
  //初始化状态
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打代码',done:false},
    {id:'004',name:'逛街',done:true}
  ]}

  //addTodo用于添加一个todo,接收的参数是todo对象
  addTodo = (todoObj) => {
    //获取原todos
    const {todos} = this.state
    //追加一个todo
    const newTodos = [todoObj,...todos]
    //更新状态
    this.setState({todos:newTodos})
  }

  render(){
    const {todos} = this.state;
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos}/>
          <Footer/>
        </div>
      </div>
      
    )
  }
}
```

父组件给子组件传递数据：通过props传递

```
List.JSX
import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
            return <Item key={todo.id} {...todo}/>
          })
        }
      </ul>
    )
  }
}

```


子组件给父组件传递数据：通过props传递，要求父组件提前给子组件传递一个函数

```
Header.jsx

import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  hanldeKeyup = (event) => {
    // console.log(event.keyCode); //键盘按下enter的数字
    //解构赋值获取keyCode，target
    const{keyCode,target} = event
    //判断是否是回车案键
    if(event.keyCode !==13) return
    //添加的todo名字不能空
    if(target.value.trim() === ''){
      alert('输入不能为空')
      return
    }
    //准备好一个todo对象
    const todoObj = {id:nanoid(),name:target.value,done:false}
    //将todoObj传递给App
    this.props.addTodo(todoObj)
    //清理输入
    target.value = ''

  }


  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.hanldeKeyup} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}

```
4.注意defaultChecked 和checked区别，defalutChecked只是在初始化的时候执行一次，checked没有这个限制，但是必须添加onChange方法类似的还有：defaultValue 和value

5.状态在哪里，操作状态的方法就在哪里

## react ajax
1.	React本身只关注于界面, 并不包含发送ajax请求的代码
2.	前端应用需要通过ajax请求与后台进行交互(json数据)
3.	react应用中需要集成第三方ajax库(或自己封装)
 

### 常用的ajax请求库
1.	jQuery: 比较重, 如果需要另外引入不建议使用

2.	axios: 轻量级, 建议使用
1)	封装XmlHttpRequest对象的ajax
2)	 promise风格
3)	可以用在浏览器端和node服务器端

在使用的过程中很有可能会出现跨域的问题，这样就应该配置代理。

所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）， 当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域 。

那么react通过代理解决跨域问题呢

# react脚手架配置代理总结



## 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）



## 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const {createProxyMiddleware} = require('http-proxy-middleware')
   module.exports = function(app) {
     app.use(
       createProxyMiddleware('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       createProxyMiddleware('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

### 兄弟之间进行通信

这就要借助消息订阅和发布机制。

举个例子来说就是张三想要跟李四进行通信，张三就需要订阅一个消息【比如A消息】，李四想要给张三数据，就必须发布一个A消息，在发布的同时将数据放入消息中，因为张三订阅了名称为A的消息，此时就能接受到李四发布的消息，从而获取到数据。

这就有点类似于看报纸，甲想要知道每天都发生什么事情，于是订阅了每天日报，乙每天都会发布这个每天日报，因为甲订阅了，于是乙就会每天就给甲方推送，甲方从而获取数据。

1.	工具库: PubSubJS
2.	下载: npm install pubsub-js --save
3.	使用: 
1)	import PubSub from 'pubsub-js' //引入
2)	PubSub.subscribe('delete', function(data){ }); //订阅
3)	PubSub.publish('delete', data) //发布消息

### async和await

### fetch
以前发送请求，使用ajax或者axios，现在还可以使用fetch。这个是window自带的，和xhr是一个级别的。

[fetch](http://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)

//发送网络请求 ---使用fecth发送（未优化）
``` 
fetch(`/api1/search/users2?q=${keyWord}`).then(
        response =>{
          console.log('联系服务器成功了');
          return response.json()
        },
        error => {
          console.log('联系服务器失败了',error)
          return new Promise()
        }
      ).then(
          response => {
            console.log('获取数据成功了',response)
          },
          error => {console.log('获取数据失败了',error)}
        )
```

//发送网络请求 ---使用fecth发送（优化）
```
fetch(`/api1/search/users2?q=${keyWord}`).then(
  response =>{
    console.log('联系服务器成功了');
    return response.json()
  },
).then(
    response => {
      console.log('获取数据成功了',response)
    },
  ).catch(
    error=>{console.log('请求出错',error)}
  )
```

##  React路由

### SPA
单页Web应用(single page web application，SPA)。整个应用只有一个完整的页面。
点击页面中的链接不会刷新页面，只会做页面的局部更新。
数据都需要通过ajax请求获取,并在前端异步展现

#### 1.	什么是路由?
  1.	一个路由就是一个映射关系(key:value)
  2.	key为路径, value可能是function或component
#### 2.	路由分类

1.	后端路由：
  1)	理解： value是function, 用来处理客户端提交的请求。
  2)	注册路由： router.get(path, function(req, res))
  3)	工作过程：当node接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据
2.	前端路由：
  1)	浏览器端路由，value是component，用于展示页面内容。
  2)	注册路由: <Route path="/test" component={Test}>
  3)	工作过程：当浏览器的path变为/test时, 当前路由组件就会变为Test组件

### react-router-dom

react的路由有三类：

web【主要适用于前端】,native【主要适用于本地】,anywhere【任何地方】

在这主要使用web也就是这个标题 react-router-dom

//路由： Route
//路由器： Router

1.	react的一个插件库。
2.	专门用来实现一个SPA应用。
3.	基于react的项目基本都会用到此库。

###  react-router-dom相关API

1.	<BrowserRouter>
2.	<HashRouter>
3.	<Route>
4.	<Redirect>
5.	<Link>
6.	<NavLink>
7.	<Switch>
其他

1.	history对象
2.	match对象
3.	withRouter函数

### 路由的基本使用
1.明确界面中的导航区、展示区
2.导航区的a标签为Link标签
3.展示区写Route标签进行路径的匹配
< Route path='/xxxx' component={Demo} />
4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>


###  四、路由组件与一般组件
			1.写法不同：
						一般组件：<Demo/>
						路由组件：<Route path="/demo" component={Demo}/>
			2.存放位置不同：
						一般组件：components
						路由组件：pages
			3.接收到的props不同：
						一般组件：写组件标签时传递了什么，就能收到什么
						路由组件：接收到三个固定的属性
											history:
														go: ƒ go(n)
														goBack: ƒ goBack()
														goForward: ƒ goForward()
														push: ƒ push(path, state)
														replace: ƒ replace(path, state)
											location:
														pathname: "/about"
														search: ""
														state: undefined
											match:
														params: {}
														path: "/about"
														url: "/about"


### NavLink与封装NavLink

	1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
  2.标签体内容是一个特殊的标签属性、
  3.通过this.props.children可以获取标签体内容

### Switch的使用
1.通常情况下，path和component是一一对应的关系、
2.Switch可以提高路由匹配效率（单一匹配）

### 解决多级路径刷新页面样式丢失的问题

1. public/index.html 中引入样式时不写 ./ 写 /(常用)
2.public/index.html 中引入样式时不写 ./ 写 %PUBLIC_URL%(常用)
3.使用HashRouter

### 路由的严格匹配与模糊匹配
1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致
2.开启严格匹配， 如：<Route exact path="/about" component={About} />
3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

### Redirect的使用

1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redire指定的路由
2.具体编码：
  <Switch>
    <Route path="/about" component={About} />
    <Route  path="/home" component={Home} />
    <Redirect to="/about" />
  </Switch>

  ### 嵌套路由
  ```
   <Switch>
      <Route path="/home/news" component={News}  />
      <Route path="/home/message" component={Message}  />
      <Redirect to="/home/news" />
    </Switch>
  ```
  1.注册子路由时写上父路由的path值
  2.路由的匹配是按照注册路由的顺序进行的

  ### 向路由组件传递参数
  1.params 参数
   路由链接(携带参数):
   ```
    <Link to='/demo/test/tom/18'>详情</Link>
   ```
   注册路由(声明接收):
   ```
   <Route path="/demo/test/:name/:age" component={test} />
   ```
   接收参数：
   ```
   const {name,title} = this.props.match.params
   ```

### 使用query-string  插件解析url参数
1.安装query-string插件
npm i -save-dev query-string
在页面引用query-string
import queryString from 'query-string';

```
let obj =  {name:'tom',age:18};
console.log(queryString.stringify(obj),'ooo0');
//age=18&name=tom
let str = 'carName=奔驰&price=190'
console.log(queryString.parse(str),'stroo')
//{str:'奔驰',age:18}

```
2.search参数
路由链接（接待参数）：
```
<Link to='/demo/test/?name=tom&age=18' >详情</Link>
```
注册路由（无需声明，正常注册即可）：
```
<Route path="/demo/test" component={Test} />
```
接收参数
```
cosnt {search} = this.props.location
```
备注：获取到的search是urlencoded编码字符串，需要借助querystring解析

3.state参数
路由链接（接待参数）：
```
<Link to={{path:'/demo/test',state:{name:'tom',age:18} }}>详情</Link>
```
注册路由（无需声明，正常注册即可）：
```
<Route path="/demo/test" component={Test} />
```
接收参数
```
this.props.location.state
``
备注：刷新也可以保留住参数

### 编程式路由导航
借助this.props.history对象上的API对操作路由跳转、前进、后退
-this.props.history.push()
-this.props.history.replace()
-this.props.history.goBack()
-this.props.history.goForward()
-this.props.history.go()

### BrowserRouter 与HashRouter的区别
1.底层原理不一样
BrowserRouter使用的是H5的history API . 不兼容IE9及一下版本
HashRouter使用的是URL 的哈希值

2. url表现形式不一样
 BrowserRouter的路径中没有#，例如：localhost:3000/demo/test
 HashRouter的路径包含#，location:3000/#/demo/test

3. 刷新后多【路由state参数的影响
（1).BrowserRouter没有任何影响，因为state保存在history对象中
（2）HashRouter刷新后会导致路哟state参数的丢失
4.备注：HashRouter可以用于解决一些路径错误相关的问题




import React, { Component } from 'react'
import './index.css'

//创建Context对象
const MyContent = React.createContext()
const {Provider,Consumer} = MyContent
export default class A extends Component {
  state = {username:'tom',age:18}
  render() {
    const {username,age} = this.state
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是{this.state.username}</h4>
        <Provider value={{username,age}}>
          <B/>
        </Provider>
      </div>
    )
  }
}

 class B extends Component {
  render() {
    return (
      <div className="child">
        <h3>我是B组件</h3>
        {/* <h4>我从A组件接收的用户名是{this.props.username}</h4> */}
        <C/>
      </div>
    )
  }
}

//类式组件
// class C extends Component {
//   static contextType = MyContent
//   render() {
//     console.log(this.context)
//     return (
//       <div className="grand">
//         <h3>我是C组件</h3>
//         <h4>我从A组件接收到的用户名:{this.context.username},年龄:{this.context.age}</h4>
//       </div>
//     )
//   }
// }

function C (){
  return (
    <div className="grand">
      <h3>我是C组件</h3>
      {/* <h4>我是从A组件接收到的用户名：{username},年龄是{age}</h4> */}
      <Consumer>
        {
          value =>`${value.username},年龄是${value.age}`
        }
      </Consumer>
    </div>
  )
}
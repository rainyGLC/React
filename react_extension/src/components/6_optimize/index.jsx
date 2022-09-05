import React, { PureComponent } from 'react'
import './index.css'
export default class parent extends PureComponent {
  state = {carName:'奔驰c36',stus:['小张','效力','小王']}

  addStu = ()=> {
    const {stus} = this.state
    this.setState({stus:['小刘',...stus]})

  }
  
  changeCar = ()=>{
    // this.setState({carName:'迈巴赫'})
    const obj = this.state
    obj.carName = '迈巴赫'
    this.setState(obj)
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   // console.log(this.props,this.state,'oi')
  //   // console.log(nextProps,nextState,'oo');

  //   return !this.state.carName === nextState.carName
  //   // if(this.state.carName === nextState.carName) return false
  //   // else return true
  // }
  render() {
    const {carName} = this.state
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {this.state.stus}
        <span>我的车名字是：{carName}</span><br />
        <button onClick={this.changeCar}>点我换车</button>
        <button onClick={this.addStu}>添加一个小刘</button>
        <Child carName="奥拓"/>
      </div>
    )
  }
}

class Child extends PureComponent {
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log(this.props,this.state,'oi')
  //   console.log(nextProps,nextState,'oo');
  //   return !this.props.carName === nextProps.carName
  //   // if(this.props.carName === nextProps.carName) return false
  //   // else return true
  // }
  render() {
    console.log('Child---render')
    return (
      <div className="child">
        <h3>我是Child组件</h3>
        <span>我接到的车是{this.props.carName}</span>
      </div>
    )
  }
}

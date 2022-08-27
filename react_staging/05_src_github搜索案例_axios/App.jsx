import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'



export default class App extends Component {
  
  state = { //初始化状态，
    users:[], //users初始化为数组
    isFirst:true, //是否为第一次打开页面
    isLoading: false, //标识是否为加载中
    err:'', //存储请求相关错去信息
  } 
  
  //更新App的state
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}  />
        <List {...this.state} />
      </div>
    )
  }
}

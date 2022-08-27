import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  state = { //初始化状态，
    users:[], //users初始化为数组
    isFirst:true, //是否为第一次打开页面
    isLoading: false, //标识是否为加载中
    err:'', //存储请求相关错去信息
  }
  //订阅消息
  componentDidMount(){
    this.token = PubSub.subscribe('atguigu',(_,stateObj) =>{
      this.setState(stateObj)
    })
  }
  componentWillUnmount(){
    //取消订阅
    PubSub.unsubscribe(this.token)
  }

  //  //更新App的state
  //  updateAppState = (stateObj) => {
  //   this.setState(stateObj)
  // }


  render() {
    const { users,isFirst,isLoading,err} = this.state
    return (
      <div className="row">
        {
          //三元表达式
          isFirst ? <h2>欢迎使用,输入关键字，随后点击搜索</h2> :
          isLoading ? <h2>Loading...</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((userObj)=> {
            return (
              <div key={userObj.id} className="card">
                <a  rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

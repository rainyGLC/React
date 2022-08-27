import React, { Component } from 'react'


const  DetailDate = [
  {id:'01',content:'你好,中国'},
  {id:'02',content:'你好,尚硅谷'},
  {id:'03',content:'你好,未来的自己'}
]
export default class Detail extends Component {
  render() {
    console.log(this.props)
    //接收Props参数
    const {id,title} = this.props.match.params
    const findResult = DetailDate.find((datailObj) => {
      return datailObj.id === id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}

import React, { Component } from 'react'
import queryString from 'query-string';


// let obj =  {name:'tom',age:18};
// console.log(queryString.stringify(obj),'ooo0');

// let str = 'carName=奔驰&price=190'
// console.log(queryString.parse(str),'stroo')
const  DetailDate = [
  {id:'01',content:'你好,中国'},
  {id:'02',content:'你好,尚硅谷'},
  {id:'03',content:'你好,未来的自己'}
]
export default class Detail extends Component {
  render() {
    console.log(this.props)
    // const {name,id}=queryString.parse(this.props.location.search)
    // console.log({name,id},'oo');
    //接收Props参数
    // const {id,title} = this.props.match.params

    //接收search参数
    const {search} = this.props.location
    const {id,title} = queryString.parse(search)

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

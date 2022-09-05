import React, { Component } from 'react'
import  ReactDOM  from 'react-dom'


//类式组件
//  class Demo extends Component {
//   state = {count:0}
//   myRef = React.createRef()

//   add = () => {
//     console.log('00')
//     this.setState(state => ({count:state.count+1}))
//   } 
//   show = () => {
//     alert(this.myRef.current.value)
//   }

//   unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//   //
//   componentDidMount(){
//     this.timer = setInterval(()=>{
//       this.setState(state=>({count:state.count+1}))
//     },1000)
//   }
//   //
//   componentWillUnmount(){
//     //清除定时器
//     clearInterval(this.timer)
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef} />
//         <h2>当前求和状态{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     )
//   }
// }

// 函数式组件
function Demo() {
//数组的解构赋值
  const [count,setCount] = React.useState(0);
  const myRef = React.useRef()
  //相当于
  React.useEffect(()=>{
    let timer =  setInterval(()=>{
      setCount(count =>count +1)
    },1000)
    return () =>{
      clearInterval(timer)
    }
  },[])


  //加的回调
  function add() {
    // setCount(count+1)//第一种写法
    // setCount((count)=>{return count+1})
    setCount(count=>count+1)
  }

  //提示输入的回调
  function show() {
    alert(myRef.current.value)

  }
  //卸载组件的回调
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和状态:{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点击提示数据</button> 
    </div>
  )
}

export default Demo

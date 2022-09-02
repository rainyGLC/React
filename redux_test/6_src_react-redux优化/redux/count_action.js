/* 
   该文件专门为Count组件生成action对象
 */
import { INCREMENT, DECREMENT } from "./constant"
import store from "./store"

//返回的是Object对象为同步action
export const createIncrementAction = data =>({type:INCREMENT,data})

export  const createDecrementAction = data => ({type:DECREMENT,data})

//所谓的异步action，就是指action的值为函数,异步action中一般都会调用同步action,异步action不是必须 要用的
export const createIncrementAsyncAction = (data,time) => {
  return () => {
    setTimeout(()=>{
      store.dispatch(createIncrementAction(data))
    },time)
  }
}

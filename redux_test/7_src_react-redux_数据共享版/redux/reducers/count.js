/* 
  1.该文件是用于创建一个为Count组件服务的reducer,reducer的本质是一个函数
  2.reducer函数会接到两个参数，分别为：之前的状态(preState),动作对象(action)

 */
import { INCREMENT,DECREMENT } from "../constant"

const initState = 0
export default function countReducer(preState=initState,action) {
  // if(preState === undefined) preState = 0
  //从action对象中获取:type,data
   const {type,data} = action
   switch (type) {
    case INCREMENT: //如果是加
      return preState + data
    case DECREMENT: //如果是减
      return preState - data
    default:
      return preState
   }

}
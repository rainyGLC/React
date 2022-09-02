import { ADD_PERSOM } from "../constant"

const initState = [{id:'001',name:'tom',age:18}] //初始化状态,初始化人的列表
export default function personReducer(preState=initState,action) {
  const {type,data} = action
  switch (type) {
    case ADD_PERSOM: //若是添加一个人
      return [data, ...preState]
    default:
      return preState
  }
}
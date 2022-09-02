import { ADD_PERSOM } from "../constant"

const initState = [{id:'001',name:'tom',age:18}] //初始化状态,初始化人的列表
export default function personReducer(preState=initState,action) {
  const {type,data} = action
  switch (type) {
    case ADD_PERSOM: //若是添加一个人
     //preState.unshif(data) //此处不可以这样写，这样会导致prestate被改写了，personReducer就不是纯函数了
      return [data, ...preState]
    default:
      return preState
  }
}

//引入Count的Ui组件
import CountUI from '../../components/Count'
//引入action
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action'
//引入store

//引入connect 用于连接UI组件与redux
import {connect} from 'react-redux'


//1.mapStateToProps函数返回是一个对象
//返回的对象中的Key就作为传递给Ui组件props的key,value就作为传递给Ui组件props的value
//mapStateToProps用于传递状态

function mapStateToProps(state) {
  return {count:state}
}
//mapDispatchToProps函数返回的对象
//返回的对象中的Key就作为传递给Ui组件props的key,value就作为传递给Ui组件props的value
//传递的是操作状态的方法
function mapDispatchToProps(dispatch){
  return {
    //通知redux执行加法
    jia:number=>dispatch(createIncrementAction(number)),
    jian:number=>dispatch(createDecrementAction(number)),
    jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
  }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

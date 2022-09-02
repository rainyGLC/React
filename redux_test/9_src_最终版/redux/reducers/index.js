/* 
  该文件用于汇总所有reducer为一个总的reducer
 */
//引入combineReducers,用于汇总多个reducer
import { combineReducers} from 'redux'

//引入为Count组件服务的reduce
import count from './count'
//引入为person组件服务的reduce
import persons from './person'

//汇总所有reducer变成一个总的reducer
export default combineReducers({
  count,
  persons
})




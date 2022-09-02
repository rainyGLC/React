/* 盖文件专门暴露一个store对象，整个应用只有一个store对象 */

//引入createStroe,专门用于创建redux中最核心的store对象
// import {createStore, legacy_createStore} from 'redux'
// 目前createStore已经弃用，所以我们要引用legacy_createStore 
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
//引入汇总之后的reducer
import reducer from './reducers'
//引入 redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'


export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))


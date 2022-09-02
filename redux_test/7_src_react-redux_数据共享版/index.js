//引入react核心库
import React from "react";
//引用ReactDOM
// import ReactDOM  from 'react-dom'
import ReactDOM from 'react-dom/client';
import store from "./redux/store";
import {Provider} from 'react-redux'

//引入App组件
 import App from './App'

 //渲染App到页面
// ReactDOM.render(<App/>,document.getElementById('root'))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
 </Provider>
);

// 监听state变化，更新视图
//监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
// store.subscribe(()=> {
//     root.render(
//         <App />
//     );
// })





//引入react核心库
import React from "react";
//引用ReactDOM
// import ReactDOM  from 'react-dom'
import ReactDOM from 'react-dom/client';
import store from "./redux/store";

//引入App组件
 import App from './App'

 //渲染App到页面
// ReactDOM.render(<App/>,document.getElementById('root'))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// 监听state变化，更新视图
store.subscribe(()=> {
    root.render(
        <App />
    );
})





//引入react核心库
//引入react核心库
import React from "react";
//引用ReactDOM
// import ReactDOM  from 'react-dom'
import ReactDOM from 'react-dom/client';
 
import { BrowserRouter } from "react-router-dom"; 
//引入App组件
 import App from './App'

 //渲染App到页面
// ReactDOM.render(<App/>,document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

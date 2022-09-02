import React, { Component } from 'react'
import { SearchOutlined } from '@ant-design/icons';
// import {Icon} from '@ant-design/icons'
import { Button } from 'antd';
// import 'antd/dist/antd.min.css'

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <button>点我</button>
        <Button type="primary">Primary Button</Button>
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        {/* <Button icon="search">Search</Button> */}
        {/* <Icon type="step-forward" /> */}
      </div>
    )
  }
}

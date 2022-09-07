import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Detail() {
  /* setSearch更新收到的searchc参数 */
const [search,setSearch] = useSearchParams()
const id = (search.get('id'))
const title = (search.get('title'))
const contet = (search.get('content'))
  return (
    <ul>
      <li>
        <button onClick={()=>setSearch('id=008&title=哈哈&content=喜喜')}>点我更新一下search参数</button>
      </li>
      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{contet}</li>
    </ul>
  )
}

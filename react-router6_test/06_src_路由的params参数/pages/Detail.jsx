import React from 'react'
import { useParams,useMath} from 'react-router-dom'

export default function() {
  const {id,title,content} = useParams()
  // const x = useMath('/home/message/detail/:id/:title:/content')
  // console.log(x);
  // console.log(a);

  return (
    <ul>
      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{content}</li>
    </ul>
  )
}

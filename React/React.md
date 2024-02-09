# [React](https://react.docschina.org/learn)

## 基本语法

React 组件必须以大写字母开头。

```
import { useState } from 'react'

function MyButton() {}                                             // 定义子组件

export default function MyApp() {

  const [count, setCount] = useState(0)                            // 引入状态和更新函数
  function handleClick() {                                         // 定义事件，调用状态更新函数
    setCount(count + 1)
  }

  const items = [                                                  // 定义列表
    { title: '', id: 1 },
    { title: '', id: 2 },
    { title: '', id: 3 },
  ]
  const lists = items.map( item =>                                // map() 定义列表项
    <li key={ item.id }>
      { item.title }
    </li> 
  )

  if (isLogin) {                                                   // 条件渲染
    content = <Welcome />
  } else { 
    content = <Login /> 
  }

  /** 
   * 圆括号表示返回 JSX 标签 
   * 尖括号表示插入 JS 语法
  */
  return (

    <MyButton count={ count } onClick={ handleClick } />           // 通过 props 形式传递共享的 count 状态。

    <div className="" style='{{ width: user.width }}'></div>

    <div{ isLogin ? <Login /> : <Welcome /> }</div>                // 表达式渲染
    <div>{ isLogin && <Login /> }                              
  )
}
```
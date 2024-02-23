# [React](https://react.docschina.org/learn)

    $ npm install react react-dom

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

## Built-in Hook

- `use` - 定义读取资源如 Promise 和上下文值
- `useState` - 定义状态，定义更新状态函数。
- `useReducer` - 定义状态，reducer 函数中带更新逻辑的变量。
- `useContext` - 接收祖先数据。
- `useRef` - 定义无需渲染的数据，不会重新渲染组件
- `useImperativeHandle` - 定义从组件中暴露的 Ref
- `useEffect( () => {} )` - 混入外部代码
- `useLayoutEffect` - 混入外部代码，在浏览器重新绘制屏幕前执行
- `useInsertionEffect` -混入外部代码， 在 React 对 DOM 进行更改之前触发
- `useMemo( () => {} )` - 性能优化，若数据未改变则重用计算结果。
- `useCallback` - 性能优化
- `useTransition` - 性能优化，定义为非阻塞，允许其他更新中断。
- `useDeferredValue` - 性能优化，定义为非关键，允许其他部分先更新。
- `useDebugValue` 
- `useId`
- `useSyncExternalStore` 

## Built-in Components

- `<Fragment>`、`<>...</>` - 定义片段
- `<Profiler>` - 定义性能分析。
- `<Suspense>` - 定义子组件加载的后备方案。
- `<React.StrictMode>` - 定义仅用于开发环境的检测。

## Built-in API

- `createContext` - 创建 context 提供给子组件 `useContext` 使用。  
- `forwardRef` - 将 DOM 节点作为 Ref 暴露给父。
- `lazy` - 懒加载
- `memo` - props 没有变化时跳过重新渲染。
- `startTansition` - 定义为非关键的状态更新。

**react-dom**

- `createPortal`
- `flushSync`
- `prefetchDNS` - 定义预先加载
- `preconnect` - 定义预先加载
- `preload` - 定义预先加载
- `preloadModule` - 定义预先加载
- `preinit` - 定义预先加载
- `preinitModule` - 定义预先加载

**react-dom/client**

```
import {createRoot, hydrateRoot} from 'react-dom/client'

const domNode = document.getElementById('root');            - 获取预览器节点
const root = createRoot(domNode, options?)                  - 绑定预览器节点
const hydrateRoot = hydrateRoot(domNode, reactNode);        - 将 react-dom/server 创建的 React 挂载到预览器节点

root.render(reactNode)                                      - 挂载 React Node
root.unmount()                                              - 销毁 React Node

```

**react-dom/service**

- `renderToPipeableStream` - 将 React 渲染为 Node.js 流。
- `renderToStaticNodeStream` - 将非交互 React 渲染为 Node.js 流。
- `renderToReadableStream` - 将 React 渲染为 web 流。
- `renderToString` - 将 React 渲染为字符串。
- `renderToStaticMarkup` - 将非交互式 React 渲染为字符串。
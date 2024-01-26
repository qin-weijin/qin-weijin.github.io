# Vue Reactivity Philosophy

## what is reactivity?

原生 Javascript 数据（变量）变化无法触发网页视图实时更新。
Vue 使用 Proxy 代理原生 Javascript 对象

## About `ref()`

接收一个参数，返回 ref 对象


	const valRef = ref(5)







返回只有 .value 属性的对象

当他被获取时 .value get


当他被设置时 .value set
获取它的订阅者列表 遍历执行这些订阅者






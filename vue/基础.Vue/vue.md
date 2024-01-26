## 创建虚拟节点

	function h(
		type: string | Component,
		props?: object | null,
		children? Children | Slot | Slots
	): VNode

	type Children = VNode | Children[]

	type Slot = () => Children

	type Slots = { [name: string]: Slot }

## 渲染函数中定义插槽

	setup(props, { slots }) {
		return () => [
			h('tag', slots.default()),
			h('tag', slots.slotName({ key: value }))	// 定义具名的作用域插槽以传递参数
			h(_Fragment, null, slots),								// 传递所有接收到的插槽
		]
	}

## 渲染函数中使用插槽

	setup(props, { slots }){
		h(MyComponent, null, {
				...slots,																// 展开接收的插槽对象, 传递到子组件。
		    default: () => h('', {}, []),
		    slotName: () => [h(), h()],							// 返回 VNode 或包含 VNode 的数组
		})
	}

## setup 函数返回值

通过 setup 返回值暴露组件的属性、变量和方法

返回渲染函数时，将阻止其他值返回（通过 expose 显式声明暴露组件属性）

## 立即执行函数

- `( function(val){alert(val)} )("值")`
- `( function(val){alert(val)}("值") )`
- `void function(val){alert(val)}("值")`
- `function foo(val){alert(val)}; foo("值")`

将立即调用定义为变量

	export const VAutocomplete = genericComponent()(options)


## `v-model`

***一. 在 Input 元素中, `v-model` 等价于绑定 value 值和 input 事件。***

	<input v-model="seach">

	<input :value="search" @input="search = $event.target.value"/>

***二. 在自定义组件中, 默认的 `v-model` 等价于绑定 modelValue props 值和 update:modelValue 自定义事件***

	<MyComponent v-model="seach">

	<input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>

***三. 在自定义组件中, 通过 `v-model` 参数定义多个双向绑定***

	<MyComponent v-model:first="firstValue" v-model:last="lastValue"/>

<!-- MyComponent -->

	<input :value="firstValue" @input="$emit('update:first', $event.target.value)"/>
	<input :value="lastValue" @input="$emit('update:last', $event.target.value)"/>
	defineProps({ firstValue: String, lastValue: String })
	defineEmits(['update:first', 'update:last'])

***四. 在自定义组件中, 使用 computed、get、set 实现 `v-model`***

	const value = computed({
	  get() { return props.modelValue },
	  set(value) { emit('update:modelValue', value) }
	})

***五. modelModifiers 自定义 `v-model` 修饰符***

## $event 提供对原生事件的访问

	<button @click="warn('message.', $event)"></button>
	function warn(message, event) { event.preventDefault(); alert(message) }

不使用 $event 而通过箭头函数访问原生事件

	<button @click="(event) => warn('message.', event)"></button>

## $emit 触发自定义事件

	<button @click="$emit('click:control', args)"></button>

	defineEmits({
		'click:control': e => true
	})

## 模板引用

	<MyComponent ref="myRef"></MyComponent>	

	const myRef = ref(null)
	console.log(myRef)							RefImpl 对象, 储存 ref 定义的模板引用
	console.log(myRef.value)				模板引用的 Proxy 代理
	console.log(myRef.value.$el)		模板引用的 DOM 实例

**RefImpl**

	class RefImpl<T> {
	  dep
	  __v__isRef                		公共的只读变量, 标记为响应式 ref 对象
	  __v_isshallow             		标记是否浅层响应
	  _rawValue: Proxy          		储存旧的 ref 值
	  _value: Proxy             		储存当前 ref 值
	  value: Proxy
	  [[[Prototype]]: Object]
	}	



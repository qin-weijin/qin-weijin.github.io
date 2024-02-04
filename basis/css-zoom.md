# CSS Zoom 速查表

[Updated to Mozilla on February 1, 2024](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

- Selectors 选择器
- Pseudo-elements 伪元素
- Pseudo-classes 伪类
- Functions 函数
- Type 数据类型

## CSS 选择器

| Selectors  | description |
| ---------- | ----------- |
| `#id`      | 'id' 选择器 |
| `.class`   | '类'选择器 |
| `*`        | '普遍'选择器 |
| `a, p`     | '与'选择器 |
| `.a.b`     | '且'选择器 |
| `div p`    | '后'代选择器 |
| `div>p`    | '子'代选择器 |
| `div+p`    | '相邻'选择器 |
| `div~p`    | '同级'选择器 |
| `& .class` | '父'选择器 |
| **attribute 属性选择器**    | |
| `.ele[attr]`           | 选择所有带 attr 属性的元素。 |
| `.ele[attr="value"]`   | 选择所有 attr 属性值等于 value 的元素。 |
| `.ele[attr~="string"]` | 选择所有 attr 属性值包含 "string" 的元素。 |
| `.ele[attr|="str"]`    | 选择所有 attr 属性值以 "str" 开头的元素。 |
| `.ele[attr^="str"]`    | 选择所有 attr 属性值以 "str" 开头的元素。 |
| `.ele[attr$="str"]`    | 选择所有 attr 属性值以 "str" 结尾的元素。 |
| `.ele[attr*="string"]` | 选择所有 attr 属性值包含 "string" 的元素。 |

## CSS 伪元素

| Pseudo-elements | description |
| --------------- | ----------- |
| `::after` | 元素后 |
| `::backdrop` | 处于全屏模式的元素下的即刻渲染的盒子 dialog、video |
| `::before` | 元素前 |
| `::cue` |  |
| `::cue-region` |  |
| `::file-selector-button` |  |
| `::first-letter` | 首字母 |
| `::first-line` | 首行 |
| `::highlight` |  |
| `::marker` |  |
| `::part()` |  |
| `::placeholder` | 表单的占位符元素 |
| `::selection` | 被选择的文本 |
| `::slotted()` |  |

## CSS 伪类

| Pseudo-classes | description |
| -------------- | ----------- |
  | `:active` | 激活 |
  | `:hover` | 悬停 |
  | `:focus` | 焦点 |
  | `:focus-visible` |  |
  | `:focus-within` |  |
  | `:link` | 未被访问的 `<a>`、`<area>` |
  | `:any-link` | 任何拥有 href 的 `<a>`、`<area>` |
  | `:visited` | 已被访问的 `<a>`、`<area>` |
  | `:checked` | 选中的 `<input>` |
  | `:disabled` | 禁用的 `<input>` |
  | `:enabled` | 启用的 `<input>` |
  | `:first` |  |
  | `:first-child` | 指定元素，在它的父中，作为首个元素的元素 |
  | `:first-of-type` | 指定元素，在它的同类元素中，作为首个元素的元素 |
  | `:last-child` |  |
  | `:last-of-type` |  |
  | `:only-child` | 指定元素，在它的父中，没有兄弟元素的元素 |
  | `:only-of-type` | 指定元素，在它的同类元素中，没有兄弟元素的元素 |
  | `:nth-child(arg)` | 指定元素，在它的父中，匹配参数指定的类型的元素，如 'odd' 奇数、'even' 偶数、 'n' 第 n 个  |
  | `:nth-of-type(arg)` | 指定元素，在它的同类元素中，匹配参数指定的类型的元素 |
  | `:nth-last-child()` |  |
  | `:nth-last-of-type()` |  |
  | `:autofill` |  |
  | `:buffering` |  |
  | `:current` |  |
  | `:default` |  |
  | `:defined` |  |
  | `:dir` |  |
  | `:empty` | 没有子元素的指定元素 |
  | `:fullscreen` |  |
  | `:future` |  |
  | `:has()` |  |
  | `:host` |  |
  | `:host-context()` |  |
  | `:host()` |  |
  | `:in-range` |  |
  | `:indeterminate` |  |
  | `:invalid` |  |
  | `:is()` |  |
  | `:lang(arg)` | 指定元素，匹配参数指定的语言的元素，如 'en-US' |
  | `:left` |  |
  | `:local-link` |  |
  | `:modal` |  |
  | `:muted` |  |
  | `:not(arg)` | 指定元素，不匹配指定参数的元素 |
  | `:optional` |  |
  | `:out-of-range` |  |
  | `:past` |  |
  | `:paused` |  |
  | `:picture-in-picture` |  |
  | `:placeholder-show` |  |
  | `:playing` |  |
  | `:popover-open` |  |
  | `:read-only` |  |
  | `:read-write` |  |
  | `:required` |  |
  | `:right` |  |
  | `:root` | 文本的根元素 |
  | `:scope` |  |
  | `:seeking` |  |
  | `:stalled` |  |
  | `:target` | id 与当前 URL 片段 # 匹配的元素 |
  | `:user-invalid` |  |
  | `:user-valid` |  |
  | `:valid` |  |
  | `:volume-locked` |  |
  | `:where()` |  |

## CSS 函数

| Functions | description |
| -------- | ----------- |
| `attr()` | 指定属性名, 获取属性值 |
| `var()` | 指定属性名, 插入CSS 变量 自定义属性值 |
| `url()` | 指定 URL, 获取文件, 可用于调用其他元素值 |
| `cross-fade()` | 指定透明度, 混合两个图像 |
| `path()` | 指定 SVG 字符串, 绘制图案  |
| `ray()` | 指定偏移字符串, 定义动画元素路径 |
| `env()` | 插入环境变量 |
| `repeat(n, val)` | 重复 val 值 n 次 |
| `counter()` | 计算器 |
| `counters()` | 计算器 |
| `symbols()` | 内联计数器 |
| **calculate 计算** | |
| `calc()` | 指定表达式, 返回结果 |
| `mod()` | 指定表达式, 返回模数 |
| `rem()` | 指定表达式, 返回余数 |
| `abs()` | 指定表达式, 返回绝对值 |
| `sign()` | 指定表达式, 返回: 1, -1, 0, -0 |
| `round(strategy, a, b)` | 指定舍入策略, 比较 a b 执行舍入 |
| **trigonometric 三角函数** | |
| `acos()` | 反余弦 |
| `asin()` | 反正弦 |
| `atan()` | 反正切 |
| `atan2()` | 反正切 |
| `cos()` | 余弦 |
| `sin()` | 正弦 |
| `tan()` | 正切 |
| **exponential 指数函数** | |
| `exp()` | 次方 |
| `hypot()` | 平方和的平方根 |
| `log()` | 对数 |
| `pow()` | val 的 n 次方值 |
| `sqrt()` | 平方根 |
| **scope 范围** | |
| `fit-content()` | 指定值, 限制这个值不会超过实质可用值 |
| `clamp(min, val, max)` | 指定范围  |
| `minmax(min, max)` | 指定范围 |
| `max()` | 指定最大值 |
| `min()` | 指定最小值 |

## CSS 数据类型

**特殊值** 

- initial - 初始
- inherit - 继承
- unset - 未设置
- revert - 恢复

**type color**

- 关键值定义 `type named-color`、`type system-color`、`type currentcolor`
- 十六进制标记 `type hex-color`
- 函数定义

```css
.color {
  color: rgb()        /* 颜色值 0 ~ 255 | 0 ~ 100% */
  color: rgba()       /* 不透明度 0 ~ 1  */
  color: hsl()        /* 色相 0 ~ 360, 饱和度 0 ~ 100%, 亮度 0 ~ 100%  */
  color: hsla()       /* 不透明度 0 ~ 1  */
  color: color-mix()  /* 颜色混合  */
  color: color() 
  color: hwb() lab() lch() oklab() oklch()
}
```

**type gradient 渐变**

```css
.background {
  background: linear-gradient()           /* 线性渐变 */
  background: radial-gradient()           /* 径向渐变 */
  background: repeating-linear-gradient() /* 重复线性渐变 */
  background: repeating-radial-gradient() /* 重复径向渐变 */
  background  conic-gradient()            /* 锥形渐变 */
}
```

**type easing-function 变化速率函数**

```css
/* 定义动画周期持续时间变化 */
.animation {
  /* 线性函数 liner(<point-list>)  */
  animation-timing-function: linear;
  /* 三次贝塞尔函数和关键字 */
  animation-timing-function: cubic-bezier(<x1>, <y1>, <x2>, <y2>);
  animation-timing-function: ease ease-in ease-out ease-in-out;
  /* 阶跃函数和关键字 */
  animation-timing-function: steps(2, start) step-start step-end;
}
/* 定义过渡周期持续时间变化 */
.transition {
  transition-timing-function: ;
}
```

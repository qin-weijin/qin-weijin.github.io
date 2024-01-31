# HTML5 新特性

参考网站：[MDN HTML Docs](https://developer.mozilla.org/zh-CN/docs/Web/HTML)、[W3S HTML5 新特性](https://www.w3school.com.cn/html/html5_intro.asp)

- 新的表单控件：`<datalist>`, `<keygen>`, `<output>`
- 图像支持：`<canvas>`, `<svg>`
- 多媒体支持：`<video>`, `<audio>`, `<embed>`, `<source>`, `<track>`
- 新的属性语法支持包括：双引号, 单引号, 不带引号和 props 写法。

**简明的文档类型和字符编码声明**

```html
<!DOCTYPE html>
<meta charset="UTF-8">
```

**自定义标签**

```
<customTag></customTag>
<style>
  .customTag
    display: block;
    background-color: #ddd;
</style>
```

**删除部分元素**

- `<acronym>`
- `<applet>`
- `<basefont>`
- `<big>`
- `<center>`
- `<dir>`
- `<font>`
- `<frame>`
- `<frameset>`
- `<noframes>`
- `<strike>`
- `<tt>`

## Storage API

挂载于 Window.sessionStorage 和 Window.localStorage 属性上，访问该属性返回当前源储存的 Storage 对象。

- sessionStorage - 数据将在页面关闭时销毁。
- localStorage - 数据不会自动销毁，除非通过 Javascript 清除预览器缓存或本地缓存。

**属性和方法**

- `length` 
- `key(index)` - 返回储存的第 n 个健名
- `getItem(key)` - 返回指定健值
- `setItem(key, val)` - 设置或添加指定健值
- `removeItem(key)` - 删除指定健
- `clear()` - 清空所有健


[**StorageEvent API**](https://developer.mozilla.org/zh-CN/docs/Web/API/StorageEvent)

当前页面使用的 storage 被其他页面修改时会触发 StorageEvent 事件。

## 语义化标签

| Tag            | Description |
| -------------- | ----------- |
| `<h1 ~ h6>`    | 标题 |
| `<p>`          | 段落 |
| `<article>`    | 章，用于独立的外部内容 |
| `<section>`    | 段，用于内容分段。一般包含标题、描述、内容 |
| `<figure>`     | 独立内容图像、图表、照片、代码，被删除不应该影响正常的文本流。 |
| `<figcaption>` | 独立内容标题 |
| `<header>`     | 页眉 |
| `<footer>`     | 页脚 |
| `<main>`       | 主要内容 |
| `<nav>`        | 导航链接，"可见"或"隐藏"，"内嵌于页面"或"独立的导航栏" |
| `<aside>`      | 定义页面内容之外的内容。 |

---------------------------------------------------------------------------------------------------------------------
## More About HTML

**通用块元素 div**

- 在新行开始
- 宽度为父元素的 100%
- block 可嵌套 inline
- height line-height margin-top margin-bottom 可控

**通用内联元素 span**

- 在同行开始
- 宽度为内容宽度且不可变
- inline 只能嵌套 inline
- height line-height margin-top margin-bottom 不可变

**XML**

用于数据传输的 HTML。

**DTD 结构**

程序间数据交换的标识符和语法规范。

**XHTML - 更严格、纯洁的 HTML 规范**

- XHTML 1.0 Strict 严格型
- XHTML 1.0 Transitional 过渡型
- XHTML 1.0 Frameset 框架型

XHTML 特性：

- 所有的标记都必须要有一个相应的结束标记
- 所有标签的元素和属性的名字都必须使用小写
- 所有的XML标记都必须合理嵌套
- 所有的属性必须用引号""括起来
- 把所有<和&特殊符号用编码表示
- 给所有属性赋一个值
- 不要在注释内容中使 "--"
- 属性最小化

**全局属性**

- id 
- class - 类命名应该以功能或内容而非表现形式。
- data-* 
- accesskey 
- autocapitalize 
- autofocus
- contenteditable 
- contextmenu 
- dir 
- draggable
- enterkeyhint
-  exportparts
- hidden 
- inputmode 
- is 
- itemid 
- itemprop 
- itemref
- itemscope 
- itemtype 
- lang
- nonce 
- part
- slot 
- spellcheck 
- style 
- tabIndex - tab 键次序控制
- title
- translate

**更多其他属性**

- `aria-*` - 是一组用于支持残障人士访问的属性。
- `xml: lang`、`xml:base` - XHTML 兼容属性。
- 事件处理程序属性

---------------------------------------------------------------------------------------------------------------------

## Viewport `<meta>` 标记

用于控制视口大小和形状。
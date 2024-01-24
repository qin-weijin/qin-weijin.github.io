# HTML5 新标签

- `<header>` - 页眉										
- `<main>` - 主要内容
- `<footer>` - 页脚

- `<nav>` - 导航链接，"可见"或"隐藏"，"内嵌于页面"或"独立的导航栏"
- `<aside>` - 定义页面内容之外的内容。

- `<menuitem>` -弹出菜单命令和菜单项目
- `<dialog>` - 对话框、窗口
- `<time>` - 日期、时间
- `<bdi>` - 方向文本
- `<mark>` - 强调

- `<wbr>` - 定义可能的折行（line-break）。
- `<meter>` - 定义已知范围（尺度）内的标量测量。
- `<progress>` - 定义任务进度。
- `<rp>` -	定义在不支持 ruby 注释的浏览器中显示什么。
- `<rt>` -	定义关于字符的解释/发音（用于东亚字体）。
- `<ruby>` - 定义 ruby 注释（用于东亚字体）。

**章、段**

`<article>` - 章，用于独立的外部内容
`<section>` - 段，用于内容分段。一般包含标题、描述、内容

**独立内容**

`<figure>` - 规定独立的内容（图像、图表、照片、代码等等），这些内容被删除不应该影响正常的文本流。
`<figcaption>` - 定义标题

**可展开的详细信息**

`<details>`
`<summary>` - 定义标题

## HTML 规范

### 属性顺序

- `id`
- `class` - 应该以功能或内容命名，不要使用表现形式命名。
- `name`
- `data-xxx`
- `src`, `for`, `type`, `href`
- `title`, `alt`
- `aria-xxx`, `role`

### 语义化标签

- `<blockquote>` - 大段引用
- `<cite>` - 短引用
- `<b>` - 样式加粗
- `<strong>` - 强调内容加粗
- `<i>` - 样式斜体
- `<em>` - 强调内容斜体
- `<abbr>` - 缩写

### 标题使用标准

- `<h1>` - 书的名称
- `<h2>` - 书的每个章节标题
- `<h3>` - 章节内的文章标题
- `<h4>`、`<h5>`、`<h6>` - 小标题/副标题 
- `<p>` - 章节的段落

## block 块元素

- 在新行开始
- 宽度为父元素的 100%
- block 可嵌套 inline
- height line-height margin-top margin-bottom 可控

- `<div>` - 通用块元素
- `<h1 - h6>` - 标题
- `<p>` - 段落（块元素）

- `<dir>` - 目录列表
- `<fieldset>` - 控制组
- `<isindex>`
- `<menu>` - 菜单列表
- `<noframes>`
- `<noscript>` - 脚本

## inline 内联元素

- 在同行开始
- 宽度为内容宽度且不可变
- inline 只能嵌套 inline
- height line-height margin-top margin-bottom 不可变

- `<span>` - 通用内联元素
- `<a>` - 链接

## 其他标签

- `<small>` - 小号
- `<sub>` - 下标
- `<sup>` - 上标
- `<ins>` - 插入字
- `<del>` - 删除字
- `<kbd>` - 键盘码
- `<samp>` - 代码样本
- `<var>` - 变量
- `<acronym>` - 首字
- `<strike>` - 中划线
- `<sub>` - 下标
- `<sup>` - 上标
- `<tt>` - 电传文本
- `<u>` - 下划线文本
- `<abbr>` - 缩写
- `<address>` - 地址
- `<blockquote>`  - 块引用
- `<q>` - 行内引用
- `<cite>` - 分离
- `<dfn>` - 项目
# 基础

## HTML5 新特性

- 语义化标签
- 新的标签属性
- 新的输入类型，即 `<input type="">`
- 新的文档类型（DOCTYPE）声明：`<!DOCTYPE html>`
- 新的字符编码（charset）声明：`<meta charset="UTF-8">`，默认的字符编码：UTF-8
- 新表单控件：`<datalist>`, `<keygen>`, `<output>`
- 新的属性语法：双引号, 单引号, 不带引号和 props 写法。
- 新图像支持：`<canvas>`, `<svg>`
- 多媒体支持：`<video>`, `<audio>`, `<embed>`, `<source>`, `<track>`
- 新的 API：本地存储
- 删除部分元素

详见：[https://www.w3school.com.cn/html/html5_new_elements.asp](https://www.w3school.com.cn/html/html5_new_elements.asp "https://www.w3school.com.cn/html/html5_new_elements.asp")

**将新的语义化标签定义为块元素以兼容旧预览器**

	header, section, footer, aside, nav, main, article, figure {
    	display: block;
	}

## 自定义标签

例： 自定义 <myHero> 标签

	<style>
		myHero {
    		display: block;
    		background-color: #ddd;
    		padding: 50px;
    		font-size: 30px;
		} 
	</style>
	<body>
		<myHero>My First Hero</myHero>
	</body>

## Head 标签书写规范

	<!DOCTYPE html>
	<html lang="zh-cmn-Hans">
	<head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	    <title>Style Guide</title>

		<!-- SEO -->
	    <meta name="description" content="不超过150个字符">
	    <meta name="keywords" content="your keywords">
	    <meta name="author" content="name, email@gmail.com">

	    <!-- 为移动设备添加 viewport -->
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">

	    <!-- iOS 图标 -->
	    <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png">

	    <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
	    <link rel="shortcut icon" href="path/to/favicon.ico">
	</head>

### 说明

**预览器版本声明**

`<!DOCTYPE html>` - 添加 standard mode 标准模式声明以确保预览器表现一致。

**语言声明**

- `<html lang="zh-Hans">` - 中文
- `<html lang="zh-cmn-Hans">` - 简体中文
- `<html lang="zh-cmn-Hant">` - 繁体中文
- `<html lang="en"> - 英文`

**编码声明**

`<meta charset="utf-8">` - 指定统一 UTF-8 编码并保证它是 `<head>` 标签的第一个直接子标签。

**预览器器声明**

`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">` - 指定优先使用最新版本 IE 和 Chrome 内核

**内容区声明**

viewport（不包括工具条和选择卡。为移动端设备优化，设置可见区域的宽度和初始缩放比例。）

- `width` - 浏览器宽度，输出设备中的页面可见区域宽度；
- `device-width` - 设备分辨率宽度，输出设备的屏幕可见宽度；
- `initial-scale` - 初始缩放比例；
- `maximum-scale` - 最大缩放比例；

**iOS 图标兼容**

apple-touch-icon 图片自动处理成圆角和高光等效果;  
apple-touch-icon-precomposed 禁止系统自动添加效果，直接显示设计原图;

	<!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
	<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png">

	<!-- iPad，72x72 像素，可以没有，但推荐有 -->
	<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-72x72-precomposed.png" sizes="72x72">

	<!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
	<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-114x114-precomposed.png" sizes="114x114">

	<!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
	<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-144x144-precomposed.png" sizes="144x144">

**favicon**

网站头像，为避免出现 404 需指定 favicon.ico
在根目录放置 favicon.ico 文件
使用 link 指定 favicon

	<link rel="shortcut icon" href="path/to/favicon.ico">

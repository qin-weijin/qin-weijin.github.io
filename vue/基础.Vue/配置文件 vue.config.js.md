## 配置文件 `vue.config.js`

`vue.config.js` 是 Vue CLI 的配置文件，  
在创建项目时自动生成备份 `.vuerc`，  
`vue.config.js` 应该导出一个包含配置选项的 Config 对象。

**baseUrl**

**publicPath**

部署入口 URL。`Default: '/'`

**outputDir**

`build` 构建时输出路径。`Default: 'dist'`

**assetsDir**

生成静态资源时输出路径。`Default: ''`

**indexPath**

生成 `index.html` 时输出路径。 `Default: 'index.html'`

**filenameHashing**

生成静态资源时是否包含 hash。`Default: true`

**pages**

多页面配置选项。

	pages: { pageName: {} }

- entry
- template
- filename
- title
- chunks

**lintOnSave**

开发环境中是否开启 eslint-loader。`Default: true`

**runtimeCompiler**

运行时编译器,可使用 template 选项

**transpileDependencies**

babel-loader 不忽略的 node_modules 文件

**productionSourceMap**

生产环境的 source map 文件

**crossorigin**

**integrity**

**configureWebpack**

Webpack 配置选项。`Type: Object | Function`

**chainWebpack**

Webpack 配置选项。 `Type: Function`

**css**

- modules
- requireModuleExtension
- extract
- soureMap
- loaderOptions
	- css
	- postcss
	- sass
	- less
	- style

**devServer**

开发服务器配置选项。

- open
- host
- port
- https
- hotOnly
- overlay
- `before: app => {}`
- proxy - 设置代理
	- target
	- secure
	- changeOrigin
	- pathRewrite


**parallel**

启动 thread-loader

**pwa**

插件配置选项。

**pluginOptions**

插件配置选项。

	pluginOptions: { pluginName: {} }
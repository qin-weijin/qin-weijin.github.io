## 将 Vue 项目部署到 GitHub Pages

- 将 Vite + Vue 项目部署到 `https://<USERNAME>.github.io/<REPO>/`
- 构建代码储存到 gh-pages 分支。`$ npm run build`
- 项目源码储存到 main 分支。
- 修改路由入口使其匹配仓库。 `path: '/<REPO>'`
- 修改 Mockjs 配置使项目可通过 Axios 正常访问模拟数据。

**修改项目入口**
```  
<!-- vite.config.ts -->

export default defineConfig({
  base: "/<REPO>/",
})
```
**修改路由入口**
```
<!-- router/index.ts -->

import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/<REPO>',
    component: () => import('@/../index.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
```

**Mockjs 文件目录**

mock-prod-server.ts 文件必须位于 src 文件路径。
```
./my-project
|- mock
|   └- mock_data              - 定义模拟数据
└- src
    └- mock-prod-server.ts    - 调用 createProdMockServer 创建模拟数据
```

**配置在生产环境应用 Mockjs**
```  
<!-- vite.config.ts -->

export default defineConfig({
  plugins: [
    viteMockServe({
        mockPath: 'mock',     // mock 入口
        localEnabled: true,   // 监听 mockPath 变化
        prodEnabled: true,    // prod 环境下使用 mock
        injectCode: ` 
          import { setupProdMockServer } from './mock-prod-server';
          setupProdMockServer();
        `            
    })
  ],
})
```

**配置上传 github main 时忽略构建文件**
```
<!-- .gitignore -->

node_modules
dist
...
```
**安装构建工具**

    $ npm install gh-pages --save-dev

**配置到命令行**
```
<!-- packjson.json -->

{
  "scripts": {
    "deploy": "gh-pages -d dist -r https://github.com/<USERNAME>/<REPO>.git -b gh-pages"    
  }
}
```
**运行命令上传项目**

    $ npm run build
    $ npm run deploy


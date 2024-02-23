# ant design

    $ npm install antd --save

**获取 React 实例**

- useState
- React.FC

```
import React from 'react';
const App: React.FC = () => {
  const [primary, setPrimary] = React.useState('#1677ff');
  return ()
}
```

## Theme

**获取 theme 实例**

- getDesignToken
- useToken

```
import { theme } from 'antd';
const { getDesignToken, useToken } = theme;
const globalToken = getDesignToken(config)
const App = () => {
  const { token } = useToken();
}

```

**Theme API**

```
const App = () => {
return (
<ConfigProvider
  theme={{
    token: AliasToken,          - 主题配置
    inherit: Boolean,           - 继承
    algorithm: [                - 基本算法，指定 Seed Token 展开为 Map Token 的公式。
      theme.defaultAlgorithm,     - 默认
      theme.darkAlgorithm         - 暗色        
      theme.compactAlgorithm      - 紧凑
    ],
    components: {               - 修改指定组件 token
      Button: AliasToken
    },
    cssVar: Boolean,            - 开启 CSS 变量
    hashed: Boolean,            - 生成独立的 hash 值以隔离主题
  }}></ConfigProvider>
)
}
```

**Seed Token**

基础变量，捆绑主题的一系列样式。

- borderRadius
- colorBgBase
- colorError
- colorInfo
- colorLink
- colorPrimary
- colorSuccess
- colorTextBase
- colorWarning
- controlHeight
- fontFamily
- fontFamilyCode
- fontSize
- LineType
- lineWidth
- motion - 关闭内置动效
- motionBase
- motionEaseInBack
- motionEaseInIOut
- motionEaseInOutCirc
- motionEaseInQuint
- motionEaseOut
- motionEaseOutBack
- motionEaseOutCirc
- motionEaseOutQuint
- motionUnit
- opacityImage
- sizePopupArrow
- sizeStep
- sizeUnit
- wireframe
- zIndexBase
- zIndexPopupBase

**Map Token**

梯度变量，由基础变量派生的具体样式。

- colorPrimaryBg

**Alias Token**

用于批量处理的共性组件样式，特殊处理的梯度变量。

- colorLink

## About 样式兼容

    import { StyleProvider } from '@ant-design/cssinjs';

## 通用属性

- rootClassName - 添加在组件最外层的 className

## 组件

**通用**

**布局**

**导航**

**数据录入**

**数据展示**

**反馈**

**其他**

## Ant Design Vue

    $ cnpm install ant-design-vue@4.x --save

**自动按需引入**

    $ cnpm install unplugin-vue-components -D

vite.config.js

```
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  plugins: [
    // ...
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
});    
```
**图标组件包**

    npm install --save @ant-design/icons-vue    
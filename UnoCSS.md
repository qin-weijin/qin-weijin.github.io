# [UnoCSS](https://unocss.nodejs.cn/)

    $ npm add -D unocss

**main.ts**

    import 'virtual:uno.css'

**vite.config.ts**

    import UnoCSS from 'unocss/vite'
    export default defineConfig({ plugins: [UnoCSS()]})

**配置文件**
```ts
// uno.config.ts
import {
  presetUno,          // 默认预设
  presetAttributify,  // 为其他规则启用属性化模式
  presetIcons,        // 由 Iconify 提供支持的纯 CSS 图标解决方案
  presetTypography,   // 排版预设
  presetMini          // 最小但重要的规则和变体
  presetWind          // Tailwind CSS / Windi CSS 紧凑预设
  presetTagify        // 为其他规则启用标签化模式
  presetWebFonts      // 网络字体（Google Fonts 等）支持
  presetRemToPx       // 将 rem 转换为 px 以供工具使用
} from 'unocss'

import {defineConfig, transformerDirectives, transformerVariantGroup} from 'unocss'

export default defineConfig({  
  // 自定义规则
  rules: [['m-1', { margin: '1px' }],],
  // 合并规则
  shortcuts: { 'btn': 'py-2 px-4 font-semibold', },
  // 主题
  theme: { colors: {} },
  // 预设
  presets: [presetUno(), presetWebFonts({ fonts: {} }),],
  // 转换器
  transformers: [ transformerDirectives(), transformerVariantGroup(),], 
})
```
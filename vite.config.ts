import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
  ],
  resolve: {
    alias: { '@': resolve(__dirname, 'src'), },
    extensions: ['.js', '.json', '.ts', '.vue']
  }
})

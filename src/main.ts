import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// VueFullPage
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

// // unocss
import 'virtual:uno.css'

import './style.scss'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(VueFullPage)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

import "lib-flexible/flexible.js"
// main.ts
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
createApp(App).use(store).use(router).mount('#app')

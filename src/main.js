import { createApp } from 'vue'
import { createPinia } from "pinia";
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
const pinia = createPinia()
app.use(ElementPlus, {
    locale: zhCn,
  })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(pinia);
app.use(router);
app.config.globalProperties.$store=pinia
app.mount("#app");

import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
import * as Icons from '@element-plus/icons-vue'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})

//注册全局方法日期格式转换
app.use(globalRegister)
app.use(store)
//先将动态路由注册到main的children中,再执行app.use(router),否则再次页面刷新时,将直接跳转到not-found页面,详见coderwhy老师项目的第八节
setupStore()
app.use(router)

app.mount('#app')

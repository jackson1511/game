import './assets/main.css'
// import './assets/style.css'
// import './assets/home.css'
// import './assets/layoutthem.css'
// import './assets/start.css'
// import './assets/vender.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import { i18n } from '@/utils/i18n'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(i18n)

app.mount('#app')
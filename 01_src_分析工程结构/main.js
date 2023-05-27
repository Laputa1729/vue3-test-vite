import './assets/main.css'

// 引入的不再是 Vue 的构造函数，而是一个名为 createApp 的工厂函数。
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象 —— app（类似于 vue2 中的 vm，但 app 比 vm 更“轻”）
const app = createApp(App)
// console.log('@@@', app)
app.mount('#app')

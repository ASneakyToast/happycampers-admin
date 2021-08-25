import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
//app.config.globalProperties.$apiBaseUrl = "http://localhost:4000/"
//app.provide = {
//  globalVariable: 123
//}
// then `inject: ["globalVariable"]` in component

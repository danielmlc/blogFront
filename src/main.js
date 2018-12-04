import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/reset.css'
import './registerServiceWorker'
import './theme.sass'
import nprogress from 'nprogress'// 页面顶部进度条
import './assets/style/index.css'
//引入图标样式
import 'font-awesome/css/font-awesome.min.css'
router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})

router.afterEach(transition => {
  nprogress.done()
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

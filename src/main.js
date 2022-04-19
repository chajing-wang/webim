import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import YumyImui from './plug'

Vue.config.productionTip = false

Vue.use(YumyImui)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

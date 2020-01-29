import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import vuetify from './plugins/vuetify'
import { sync } from 'vuex-router-sync'
import store from './store/store'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

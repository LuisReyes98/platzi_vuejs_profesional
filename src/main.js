import Vue from 'vue'
import App from '@/App.vue'
import EventBus from '@/plugins/event-bus'
import VueRouter from 'vue-router'

import routes from '@/routes'

Vue.use(VueRouter)
Vue.use(EventBus)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

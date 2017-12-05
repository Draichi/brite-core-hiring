import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import VueResource from 'vue-resource'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3131'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

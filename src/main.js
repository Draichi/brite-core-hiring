import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import router from './router'
import 'vuetify/dist/vuetify.css'
import { store } from './store'


Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyC2wcOhp1cSy8zIDdb5i0Ftq23b8uNz65g",
      authDomain: "britecore-app.firebaseapp.com",
      databaseURL: "https://britecore-app.firebaseio.com",
      projectId: "britecore-app",
      storageBucket: "britecore-app.appspot.com",
    })
    this.$store.dispatch('loadedRisks')
  }
})

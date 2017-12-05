import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import AddNew from '../components/AddNew.vue'
import Single from '../components/Single.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'New',
      component: AddNew
    },
    {
      path: '/new/:id',
      name: 'edit',
      component: AddNew
    },
    {
      path: '/risk/:id',
      name: 'single',
      component: Single
    },
    {
      path: '*',
      component: Home
    }
  ],
  mode: 'history'
})

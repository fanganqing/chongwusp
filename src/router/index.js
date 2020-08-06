import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import collect from '../views/collect.vue'
import my from '../views/my.vue'
import shopping from '../views/shopping.vue'
import mydraft from '../components/my/mydraft.vue'
import useragreement from '../components/my/useragreement.vue'
import policy from '../components/my/policy.vue'
import feedback from '../components/my/feedback.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: feedback
  }, {
    path: '/policy',
    name: 'policy',
    component: policy
  }, {
    path: '/useragreement',
    name: 'useragreement',
    component: useragreement
  },
  {
    path: '/collect',
    name: 'collect',
    component: collect
  },
  {
    path: '/mydraft',
    name: 'mydraft',
    component: mydraft
  },
  {
    path: '/my',
    name: 'my',
    component: my
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: shopping
  }

]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Produto from '../components/Produto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Burger',
    component: () => import(/* webpackChunkName: "about" */ '../views/Burger.vue')

  },
  {
    path: '/pizza',
    name: 'Pizza',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pizza.vue')
  },
  {
    path: '/',
    name: 'Produto',
    component: Produto
  },
]

const router = new VueRouter({
  routes,  
  mode: 'history',

})

export default router

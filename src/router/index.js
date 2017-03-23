import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/components/Home'
import Market from '@/components/Market'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'

Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path: '/market',
    	name: 'Market',
    	component: Market
    },{
    	path: '/cart',
    	name: 'Cart',
    	component: Cart
    },{
    	path: '/mine',
    	name: 'Mine',
    	component: Mine
    }
  ]
})

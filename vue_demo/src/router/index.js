import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Banggood from '@/views/banggood/Index/index.vue'
import SocketWeb from '@/views/socket-demo/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/banggood',
      name: 'banggood',
      component: Banggood
    },
    {
      path: '/socket',
      name: 'Socket',
      component: SocketWeb
    },
    {
      path: '*',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
const AbiView = resolve => require.ensure(
  [], () => resolve(require('@/components/abiModel/index.vue')),
  'abi'
)
const AbiADDView = resolve => require.ensure(
  [], () => resolve(require('@/components/abiModel/addModelView/index.vue')),
  'abi'
)
const AbiEditView = resolve => require.ensure(
  [], () => resolve(require('@/components/abiModel/editModelView/index.vue')),
  'abi'
)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/abi'
    },
    {
      path: '/abi',
      name: 'abi',
      component: AbiView,
      redirect: '/abi/add',
      children: [
        { path: '/abi/add', name: 'abiAdd', component: AbiADDView },
        { path: '/abi/edit', name: 'abiEdit', component: AbiEditView }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Entries from '@/components/Entries'
import NewEntry from '@/components/NewEntry'
import EditEntry from '@/components/EditEntry'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Entries',
      component: Entries
    },
    {
      path: '/new',
      name: 'NewEntry',
      component: NewEntry
    },
    {
      path: '/:id',
      name: 'EditEntry',
      component: EditEntry
    }
  ]
})

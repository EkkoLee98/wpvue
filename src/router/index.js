import Vue from 'vue'
import Router from 'vue-router'

import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Vue
  },
  {
    path:'/a',
    component: Page1,
    children:[{
      path:'/b',
      component:Page2
    }]
  }
]

export default new Router({
  routes
})
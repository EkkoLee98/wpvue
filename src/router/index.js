import Vue from 'vue'
import Router from 'vue-router'

import Page1 from '../pages/Page1.vue'
import Page2 from '../pages/Page2.vue'
//import aVue from '../App'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Page1
  },
  {
    path:'/a',
    component: Page2,
    // children:[{
    //   path:'b',
    //   component:Page2
    // }]
  }
]

export default new Router({
  routes
})

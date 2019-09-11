import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

import './assets/styles/test.css'
import './assets/images/bg.jpeg'
import './assets/styles/test-stylus.styl'

Vue.config.productionTip = false
Vue.prototype.$axios = axios //使用axios
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.use(axios);
new Vue({
    render:(h)=>h(App),
    router,
}).$mount('#app')

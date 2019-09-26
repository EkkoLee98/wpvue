import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import './assets/styles/global.styl'
import VueI18n from 'vue-i18n'
import i18n from "./i18n";

Vue.use(VueI18n); // 通过插件的形式挂载
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;//使用axios
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

new Vue({
    render:(h)=>h(App),
    i18n,
    router,
}).$mount('#app')

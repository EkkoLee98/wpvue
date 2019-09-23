import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import './assets/styles/global.styl'
import VueI18n from 'vue-i18n'
import zh from './i18n/config/lang/zh'
import en from './i18n/config/lang/en'

Vue.use(VueI18n); // 通过插件的形式挂载
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;//使用axios
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.use(axios);
const i18n = new VueI18n({
    // 设置默认语言
    locale: localStorage.getItem('lang') || 'zh',

    messages: {
        'zh': zh, // 中文语言包
        'en': en // 英文语言包
    }
    // silentTranslationWarn: true,
})
new Vue({
    render:(h)=>h(App),
    i18n,
    router,
}).$mount('#app')

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './config/lang/zh'
import en from './config/lang/en'

Vue.use(VueI18n); // 通过插件的形式挂载
const i18n = new VueI18n({
    // 设置默认语言
    locale: localStorage.getItem('lang') || 'zh',

    messages: {
        'zh': zh, // 中文语言包
        'en': en // 英文语言包
    }
    // silentTranslationWarn: true,
})

export default i18n

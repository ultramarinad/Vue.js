import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import menu from './plugins/menu'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false
Vue.use(menu)

new Vue({
    router,
    render: h => h(App),
    vuetify,
    store
}).$mount('#app')
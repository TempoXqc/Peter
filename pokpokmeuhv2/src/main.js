
import App from './App.vue'
import Vue from "vue";
import vuetify from './plugins/vuetify';
import { store } from './store/store'

new Vue({
    vuetify,
    store:store,
    render: h=>h(App)
}).$mount('#app')

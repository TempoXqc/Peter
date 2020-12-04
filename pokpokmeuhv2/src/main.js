
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script';
import Vue from "vue";

Vue.use(LoadScript);
new Vue({
    render: h=>h(App)
}).$mount('#app')

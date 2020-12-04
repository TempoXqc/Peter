import { createApp } from 'vue'
import Root from './App.vue'
import LoadScript from 'vue-plugin-load-script';

const App = createApp(Root);
App.use(LoadScript)
App.mount('#app')

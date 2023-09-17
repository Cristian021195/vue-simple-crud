import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { librosStore } from './store'
//import { counterStore } from './store/store.js'



createApp(App).use(librosStore).mount('#app')
// podemos anidar varios stores independientes, un archivo de barrrido para su organizacion
//createApp(App).mount('#app')

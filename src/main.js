import { createApp } from 'vue'
import App from './App.vue'
import rcButton from "./ui/button/button.vue"


createApp(App).component("rc-button",rcButton).mount('#app')

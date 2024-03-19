import '@/assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from "@formkit/vue";

// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(),
})

const app = createApp(App)

app.use(router)

app.use(plugin, defaultConfig);

app.mount('#app')

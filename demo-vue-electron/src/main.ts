import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import router from './router'

import axios from 'axios'

const app = createApp(App)

app.use(router)

app.provide('axios', axios)

app.mount('#app')
  .$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))

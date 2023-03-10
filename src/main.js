import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import  router  from '@/router/router'
import store from './store/store'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'
loadFonts()

  createApp(App)
  .use(vuetify)
  .use(store)
  .use(router)
  .mount('#app');

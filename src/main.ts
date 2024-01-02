import './assets/main.css'
import './assets/font.css'
import 'viewerjs/dist/viewer.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MasonryWall from '@yeger/vue-masonry-wall'
import VueViewer from 'v-viewer'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MasonryWall)
app.use(VueViewer)

app.mount('#app')

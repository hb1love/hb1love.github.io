import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WeddingView from '@/views/WeddingView.vue'
import WeddingJejuAlbumView from '@/views/WeddingJejuAlbumView.vue'
import WeddingPalaceAlbumView from '@/views/WeddingPalaceAlbumView.vue'
import ReceptionView from '@/views/ReceptionView.vue'
import ReceptionJejuAlbumView from '@/views/ReceptionJejuAlbumView.vue'
import ReceptionPalaceAlbumView from '@/views/ReceptionPalaceAlbumView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: "/wedding",
      name: "wedding",
      component: WeddingView,
    },
    {
      path: "/wedding/jeju",
      name: "wedding-jeju",
      component: WeddingJejuAlbumView,
    },
    {
      path: "/wedding/palace",
      name: "wedding-palace",
      component: WeddingPalaceAlbumView,
    },
    {
      path: "/wedding-p",
      name: "reception",
      component: ReceptionView,
    },
    {
      path: "/wedding-p/jeju",
      name: "reception-jeju",
      component: ReceptionJejuAlbumView,
    },
    {
      path: "/wedding-p/palace",
      name: "reception-palace",
      component: ReceptionPalaceAlbumView,
    },
  ]
})

export default router

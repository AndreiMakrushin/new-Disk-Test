import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home-page'
import NotePage from '../pages/note-page'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/note',
      name: 'note',
      component: NotePage,
    },
  ],
})

export default router

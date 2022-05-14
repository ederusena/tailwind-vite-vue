import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContainerExOne from '@/views/ContainerExOne.vue'
import BoxSizing from '@/views/BoxSizing.vue'
import Display from '@/views/Display.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/containerex1',
      name: 'containerex1',
      component: ContainerExOne
    },
    {
      path: '/boxsizing',
      name: 'boxsizing',
      component: BoxSizing
    },
    {
      path: '/display',
      name: 'display',
      component: Display
    },
  ]
})

export default router

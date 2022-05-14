import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContainerExOne from '@/views/ContainerExOne.vue'
import BoxSizing from '@/views/BoxSizing.vue'
import Display from '@/views/Display.vue'
import Overflow from '@/views/Overflow.vue'
import PositionDirection from '@/views/PositionDirection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/position',
      name: 'position',
      component: PositionDirection
    },
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
    {
      path: '/overflow',
      name: 'overflow',
      component: Overflow
    },
  ]
})

export default router

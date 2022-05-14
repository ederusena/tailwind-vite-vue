import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContainerExOne from '@/views/ContainerExOne.vue'
import BoxSizing from '@/views/BoxSizing.vue'
import Display from '@/views/Display.vue'
import Overflow from '@/views/Overflow.vue'
import PositionDirection from '@/views/PositionDirection.vue'
import VisibleInvisible from '@/views/VisibleInvisible.vue'
import ZIndex from '@/views/ZIndex.vue'
import FlexDirection from '@/views/FlexDirection.vue'
import FlexWrap from '@/views/FlexWrap.vue'
import FlexOne from '@/views/FlexOne.vue'
import FlexOrder from '@/views/FlexOrder.vue'
import FlexExercise from '@/views/FlexExercise.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/flexexercise',
      name: 'flexexercise',
      component: FlexExercise
    },
    {
      path: '/flexorder',
      name: 'flexorder',
      component: FlexOrder
    },
    {
      path: '/flexone',
      name: 'flexone',
      component: FlexOne
    },
    {
      path: '/flexWrap',
      name: 'flexWrap',
      component: FlexWrap
    },
    {
      path: '/flexdirection',
      name: 'flexdirection',
      component: FlexDirection
    },
    {
      path: '/zindex',
      name: 'zindex',
      component: ZIndex
    },
    {
      path: '/visibility',
      name: 'visibility',
      component: VisibleInvisible
    },
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

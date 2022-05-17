import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContainerExOne from '@/views/TailwindBase/ContainerExOne.vue'
import BoxSizing from '@/views/TailwindBase/BoxSizing.vue'
import Display from '@/views/TailwindBase/Display.vue'
import Overflow from '@/views/TailwindBase/Overflow.vue'
import PositionDirection from '@/views/TailwindBase/PositionDirection.vue'
import VisibleInvisible from '@/views/TailwindBase/VisibleInvisible.vue'
import ZIndex from '@/views/TailwindBase/ZIndex.vue'

import FlexDirection from '@/views/Flexbox/FlexDirection.vue'
import FlexWrap from '@/views/Flexbox/FlexWrap.vue'
import FlexOne from '@/views/Flexbox/FlexOne.vue'
import FlexOrder from '@/views/Flexbox/FlexOrder.vue'
import FlexExercise from '@/views/Flexbox/FlexExercise.vue'

import Grid from '@/views/Grid/Grid.vue'
import GridExercise from '@/views/Grid/GridExercise.vue'
import GridColumn from '@/views/Grid/GridColumn.vue'
import GridRowsX from '@/views/Grid/GridRowsX.vue'
import GridGapX from '@/views/Grid/GridGapX.vue'

import ThemeColor from '@/views/Customizacao/ThemeColor.vue'
import ThemeScreens from '@/views/Customizacao/ThemeScreens.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/themescreens',
      name: 'themescreens',
      component: ThemeScreens
    },
    {
      path: '/themecolor',
      name: 'themecolor',
      component: ThemeColor
    },
    {
      path: '/gridgapx',
      name: 'gridgapx',
      component: GridGapX
    },
    {
      path: '/gridrowsx',
      name: 'gridrowsx',
      component: GridRowsX
    },
    {
      path: '/gridcolumn',
      name: 'gridcolumn',
      component: GridColumn
    },
    {
      path: '/gridexercise',
      name: 'gridexercise',
      component: GridExercise
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    },
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

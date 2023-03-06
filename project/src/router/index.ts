import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from 'vue-router'

import {
  TrendCharts,Grid,List
} from '@element-plus/icons-vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/home/index.vue'),
    children:[
      {
        path:"/echarts",
        name:"echarts",
        meta:{
          title:"数据展示",
          icon:TrendCharts
        },
        component:()=>import("../views/home/childrens/EchartsView.vue")
      },
      {
        path:"/pay",
        name:"pay",
        meta:{
          title:"缴费管理",
          icon:Grid
        },
        component:()=>import("../views/home/childrens/PayList.vue")
      },
      {
        path:"/user",
        name:"user",
        meta:{
          title:"住户信息",
          icon:List
        },
        component:()=>import("../views/home/childrens/UserOne.vue"),
        children:[
          {
            path:"/userList",
            name:"userList",
            meta:{
              classifyTitle:"住户信息",
              title:"住户信息列表"
            },
            component:()=>import("../views/home/childrens/UserList.vue")
          },
          {
            path:"/userUpdate",
            name:"userUpdate",
            meta:{
              classifyTitle:"住户信息",
              title:"住户信息修改"
            },
            component:()=>import("../views/home/childrens/UserUpdate.vue")
          }
        ]
      },
    ]
  },
  {
    path:"/",
    redirect:"/login"
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router

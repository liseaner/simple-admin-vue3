<template>
   <el-row class="tac">

    <el-col :span="24">
      <!-- <h5 class="mb-2">Custom colors</h5> -->
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        :collapse="!$store.state.HomeModule.navBool"
        @open="handleOpen"
        @close="handleClose"
        router
      >
     <template v-for="(val) in router.options.routes[1].children" :key="val.path">
       <!-- 带下拉框的导航 -->
       <el-sub-menu :index="val.path" v-if="val.children">
          <template #title>
            <el-icon><component :is="val.meta.icon"></component></el-icon>
            <span>{{val.meta.title}}</span>
          </template>
          <el-menu-item-group v-for="(v) in val.children" :key="v.path"> 
            <el-menu-item :index="v.path">{{v.meta.title}}</el-menu-item>
         
          </el-menu-item-group>
        </el-sub-menu>
        <!-- 不带下拉框的导航 -->
        <el-menu-item :index="val.path" v-else>
          <el-icon><component :is="val.meta.icon"></component></el-icon>
          <span>{{val.meta.title}}</span>
        </el-menu-item>
     </template>
       
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import {useRouter} from "vue-router";

import {
  TrendCharts,Grid,List
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
let router=useRouter()
onMounted(()=>{
  console.log("获取路由规则",router.options.routes[1].children)
})
</script>

<style>

</style>
<template>
  <div>
    <el-table :data="tableData.listData.slice((currentPage4-1)*pageSize4,currentPage4*pageSize4)" style="width: 100%">
    <el-table-column prop="id" label="编号" />
    <el-table-column prop="title" label="楼盘名称"  />
    <el-table-column prop="type" label="房源类型" />
    <el-table-column prop="num" label="门牌号" />
    <el-table-column prop="hometype" label="房源户型" />
    <el-table-column prop="name" label="户主" />
    <el-table-column>
      <template #header>
        <el-input v-model="search" size="small" placeholder="请输入查询内容" @blur="searchLink"/>
      </template>
    </el-table-column>
  </el-table>
  <!-- fenye分页 -->
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :current-page="currentPage4"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.listData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref,onMounted ,reactive} from 'vue'
import link from "../../../api/Link.js"
import apiUrl from "../../../api/url.js"
import {useStore} from "vuex"
// import store from '@/store'
let store=useStore()
let search=ref("")
const currentPage4 = ref(1)
const pageSize4 = ref(15)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

// let showlist=()=>{
//   return store.state.HomeModule.listData
//   console.log(store.state.HomeModule.listData)
// }

const handleSizeChange = (val: number) => {
 pageSize4.value=val
}
const handleCurrentChange = (val: number) => {
  currentPage4.value=val
}
let tableData=reactive({
  listData:[]
})
let searchLink=()=>{
  link(apiUrl.userList,"get",{},{name:search.value}).then((ok:any)=>{
    console.log(ok)
    tableData.listData=ok.data
  })
}
onMounted(()=>{
link(apiUrl.userList).then((ok:any)=>{
  console.log(ok)
  tableData.listData=ok.data
})
// console.log('-------')
console.log('123',store.state.HomeModule.listData)
// showlist()
})
</script>

<style>

</style>
<template>
  <div>
    <el-table :data="showlist().slice((currentPage4-1)*pageSize4,currentPage4*pageSize4)" style="width: 100%">
    <el-table-column prop="id" label="编号" />
    <el-table-column prop="title" label="楼盘名称"  />
    <el-table-column prop="type" label="房源类型" />
    <el-table-column prop="num" label="门牌号" />
    <el-table-column prop="hometype" label="房源户型" />
    <el-table-column prop="name" label="户主" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >修改</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <!-- fenye分页 -->
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :current-page="currentPage4"
      layout="total, sizes, prev, pager, next, jumper"
      :total="store.state.HomeModule.listData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />


<!-- 修改的弹出框 -->
<update />
  </div>
</template>

<script lang="ts" setup>
import { ref,onMounted ,reactive} from 'vue'
import update from "../../../components/UpdateDialog.vue"
import link from "../../../api/Link.js"
import apiUrl from "../../../api/url.js"
import {useStore} from "vuex"
// import store from '@/store'
let store=useStore()
let showlist=()=>{
  let tableData=store.state.HomeModule.listData
  return store.state.HomeModule.listData
  
  console.log(store.state.HomeModule.listData)
}

let search=ref("")
const currentPage4 = ref(1)
const pageSize4 = ref(15)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
 pageSize4.value=val
}
const handleCurrentChange = (val: number) => {
  currentPage4.value=val
}
       
let tableData = reactive({
  // listdata:[],
  // $store.state.HomeModule.listData
});

onMounted(()=>{
  store.dispatch('USERUPDATE_LIST')
  showlist()
  console.log(store.state.HomeModule.listData)

})


interface User {
  date: string 
  name: string
  address: string
}

const handleEdit = (index: number, row: User) => {
  console.log(index, row)
  store.commit("SET_DIALOG",row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
  store.dispatch("DEL_DATA",row)
}

</script>

<style>

</style>
<template>
  <div>
    <el-icon @click="ck">
        <DArrowLeft v-if="$store.state.HomeModule.navBool"/><DArrowRight v-else/>
    </el-icon>
</div>
</template>

<script setup>
import {
    DArrowRight,DArrowLeft
} from '@element-plus/icons-vue'
import {useStore} from "vuex"
let store=useStore()
// import {ref } from "vue"
// let bool=ref(true)
let ck=()=>{
    console.log("我被点击了")
    // bool.value=!bool.value
    store.commit("SET_NAV_BOOL")
}
</script>

<style lang="scss">
.el-header{
    line-height: 70px;
    .el-icon{
        font-size: 20px;
    }
}
</style>